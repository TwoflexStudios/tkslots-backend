import bucketModel, { BucketStatusEnum, BucketTypeEnum, EventBucket, EventBucketTypeEnum, GameBucket, GamesEnum } from "../schemas/bucket";
import { Document, Types } from "mongoose";
import { BucketSchema } from "../schemas/bucket";
import AccountsModel, { AccountStatusEnum } from "../schemas/accounts";
import { AUTH_USER_ROOM, useApplication } from "../shared/infra/http/app";
import Player, { PlayerEventEnum } from "./Player";
import logger from "../config/pino";
import { format } from "date-fns";
import BandidosBang from "./games/BandidosBang";
import { toBRL } from "../helpers/toBRL";
import Game, { GameEventEnum, GameRoll } from "./Game";
import { Delay } from "../helpers/delay";
import { PermissionsEnum } from "../schemas/users";
import RabbitFortune from "./games/RabbitFortune";

export const GameMapping = {
    [GamesEnum.BANDIDOS_BANG]: BandidosBang,
    [GamesEnum.RABBIT_FORTUNE]: RabbitFortune
}

class Bucket {
    public players: Player[] = [];
    public games: Game<any>[] = [];
    public ended: boolean = false;

    private reservedBots: number = 0;
    //@ts-ignore
    private exitTimeout: NodeJS.Timeout;

    //@ts-ignore
    bucket: Document<unknown, {}, BucketSchema, {}, {}> & BucketSchema & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    };
    bucketId: string;
    constructor(bucketId: string) {
        this.bucketId = bucketId;
    }

    async start() {
        const bucketData = await bucketModel.findOne({ _id: this.bucketId }).populate("site");
        if (!bucketData) {
            throw new Error("Bucket not found");
        }

        useApplication().on(`${this.bucketId}:stop`, async () => {
            this.forceStop();
            logger.warn(`[${this.bucket.name}] Fechamento forçado`);
            await this.end("Fechamento forçado");
        });

        bucketData.status = BucketStatusEnum.RUNNING;
        bucketData.statusReason = "Preparando bots";
        await bucketData.save();
        this.bucket = bucketData!;

        this.prepareBots();

        this.emit("bucket:updated", this.bucket);

        useApplication().socket.desk.to(AUTH_USER_ROOM).emit("notification", {
            title: "Bucket Iniciado",
            message: `[${this.bucket.name}] Bucket iniciado`,
            permission: PermissionsEnum.NOTIFICATION_BUCKETS
        });
    }

    async forceStop() {
        this.players.forEach(player => {
            try {
                player.account.status = AccountStatusEnum.IDLE;
                player.account.bucketId = null;
                player.account.statusReason = "Fechamento forçado";
                player.save();
                player.exit();
            } catch {
                setTimeout(() => {
                    try { player.exit(); } catch { }
                }, 5000);
            }

        });
        this.games.forEach(game => game.exit());

        await AccountsModel.updateMany(
            { bucketId: this.bucketId, status: AccountStatusEnum.BUSY },
            {
                $set: {
                    status: AccountStatusEnum.IDLE,
                    bucketId: null,
                    statusReason: "Fechamento forçado"
                }
            }
        );

        clearTimeout(this.exitTimeout);
    }

    emit(event: string, data: any) {
        useApplication().socket.desk.to(AUTH_USER_ROOM).emit(this.bucketId, {
            event,
            data
        });
    }

    async end(reason = "Finalizado") {
        if (this.ended) return;
        clearTimeout(this.exitTimeout);
        this.ended = true;
        this.bucket.status = BucketStatusEnum.ENDED;
        this.bucket.statusReason = reason;

        if (this.bucket.repeat) {
            const { type: repeatMode, time } = this.bucket.repeat;
            const nextStartDate = new Date(this.bucket.startAt! || new Date());

            const repeatHandlers: Record<string, () => void> = {
                daily: () => {
                    const [hour, minute] = time.split(":");
                    nextStartDate.setHours(Number(hour), Number(minute), 0, 0);
                    nextStartDate.setDate(nextStartDate.getDate() + 1);
                },
                weekly: () => {
                    const [hour, minute] = time.split(":");
                    nextStartDate.setHours(Number(hour), Number(minute), 0, 0);
                    nextStartDate.setDate(nextStartDate.getDate() + 7);
                },
                monthly: () => {
                    const [hour, minute] = time.split(":");
                    nextStartDate.setHours(Number(hour), Number(minute), 0, 0);
                    nextStartDate.setMonth(nextStartDate.getMonth() + 1);
                },
                hours: () => {
                    const [hours, minutes] = time.split(":");
                    nextStartDate.setHours(nextStartDate.getHours() + Number(hours));
                    nextStartDate.setMinutes(nextStartDate.getMinutes() + Number(minutes));
                },
                minutes: () => {
                    const [minutes, seconds] = time.split(":");
                    nextStartDate.setMinutes(nextStartDate.getMinutes() + Number(minutes));
                    nextStartDate.setSeconds(nextStartDate.getSeconds() + Number(seconds));
                },
                seconds: () => {
                    const [seconds] = time.split(":");
                    nextStartDate.setSeconds(nextStartDate.getSeconds() + Number(seconds));
                }
            };

            const handler = repeatHandlers[repeatMode];
            if (handler) {
                handler();
                this.bucket.startAt = nextStartDate;
                this.bucket.status = BucketStatusEnum.SCHEDULED;
                this.bucket.statusReason = "Agendado";
                logger.info(`[${this.bucket.name}] Próxima execução agendada para: ${format(nextStartDate, "dd/MM/yyyy HH:mm:ss")}`);
            } else {
                logger.warn(`[${this.bucket.name}] Modo de repetição desconhecido: ${repeatMode}`);
            }
        }

        await this.bucket.save();
        logger.info(`[${this.bucket.name}] Bucket finalizado | Motivo: ${reason}`);
        this.emit("bucket:updated", this.bucket);

        useApplication().socket.desk.to(AUTH_USER_ROOM).emit("notification", {
            title: "Bucket Finalizado",
            message: `[${this.bucket.name}] Bucket finalizado`,
            permission: PermissionsEnum.NOTIFICATION_BUCKETS
        });
    }

    async prepareBots() {
        const randomBots = await AccountsModel.aggregate([
            {
                $match: {
                    status: { $in: [AccountStatusEnum.IDLE] },
                    siteId: this.bucket.site._id,
                    balance: { $gte: Number(this.bucket.botBalance) * 100 }
                }
            },
            { $sample: { size: this.bucket.bots } }
        ]);

        if (randomBots.length === 0) {
            await this.end("Nenhum bot disponível");
            return;
        }

        this.bucket.statusReason = `${randomBots.length} bots reservados para o bucket`;
        this.reservedBots = randomBots.length;

        const botIds = randomBots.map(bot => bot._id);

        const updated = await AccountsModel.updateMany(
            { _id: { $in: botIds } },
            {
                $set: {
                    status: AccountStatusEnum.BUSY,
                    statusReason: `Reservado para o bucket: ${this.bucket.name}`,
                    bucketId: this.bucketId
                }
            }
        );

        logger.info(`[${this.bucket.name}] ${updated.modifiedCount} bots reservados para o bucket`);

        this.executeEvent();
    }

    async onPlayersChange() {
        if (this.players.length === 0) {
            await this.end();
            return;
        }
    }

    async onPlayerReady(player: Player) {
        if (this.ended) {
            player.account.status = AccountStatusEnum.IDLE;
            player.account.bucketId = null;
            player.account.statusReason = "Bucket não está mais em execução";
            player.save();
            player.exit();
            return;
        }
        if (this.bucket.type === BucketTypeEnum.EVENT) {
            player.on(PlayerEventEnum.DISCONNECTED, () => this.onPlayerExit(player));
            player.on(PlayerEventEnum.CONNECTION_LOST, () => this.onPlayerExit(player));

            const eventBucket = this.bucket.bucket as EventBucket;
            const endAt = eventBucket.endAt;

            player.readAndGetAllEmailBeforeExit = eventBucket.type === EventBucketTypeEnum.BONUS_EMAIL;

            player.setAutoLogoutAt(endAt);
            return;
        } else {
            const gameBucket = this.bucket.bucket as GameBucket;

            const Game = (GameMapping as any)[gameBucket.game] as typeof BandidosBang;

            const game = new Game(player, {
                minToWin: gameBucket.options.minToWin,
                attributes: gameBucket?.options?.attributes || {} as any,
                controller: gameBucket.options.betController
            })

            this.games.push(game);

            game.callbacks.onWinner = async (balance: number) => {
                this.players = this.players.filter(bot => bot?.account?._id?.toString() !== player.account._id.toString());

                const state = player.account;
                state.balance = balance || game.balance;
                state.status = AccountStatusEnum.READY;
                state.statusReason = `Ganhou no bucket: ${this.bucket.name}`;
                state.bucketId = null;
                player.account = state;
                await player.save();
                await player.exit();
                await game.exit();
                useApplication().socket.desk.to(AUTH_USER_ROOM).emit("notification", {
                    title: "Nova conta",
                    message: `[${(this.bucket.site as any).gameTitle}] Nova conta com: ${toBRL(game.balance / 100)} disponível para uso`,
                    permission: PermissionsEnum.NOTIFICATION_WIN
                });
                useApplication().socket.desk.to(AUTH_USER_ROOM).emit(`bot-${player.account._id}`, {
                    event: GameEventEnum.WIN,
                    data: {
                        balance: game.balance,
                        bet: game.bet
                    }
                });

                this.onPlayersChange();
            }

            game.callbacks.onLoser = async (balance: number) => {
                this.players = this.players.filter(bot => bot?.account?._id?.toString() !== player.account._id.toString());

                const state = player.account;
                state.balance = balance || game.balance;
                state.status = AccountStatusEnum.IDLE;
                state.statusReason = `Perdeu no bucket: ${this.bucket.name}`;
                state.bucketId = null;
                player.account = state;
                await player.save();
                await player.exit();
                await game.exit();

                useApplication().socket.desk.to(AUTH_USER_ROOM).emit(`bot-${player.account._id}`, {
                    event: GameEventEnum.LOSE,
                    data: {
                        balance: game.balance,
                        bet: game.bet
                    }
                });

                this.onPlayersChange();
            }

            game.callbacks.onSpin = async (bet: number) => {
                useApplication().socket.desk.to(AUTH_USER_ROOM).emit(`bot-${player.account._id}`, {
                    event: GameEventEnum.SPINING,
                    data: {
                        balance: game.balance,
                        bet
                    }
                });
            }

            game.callbacks.onSpinResult = async (result: GameRoll) => {
                useApplication().socket.desk.to(AUTH_USER_ROOM).emit(`bot-${player.account._id}`, {
                    event: GameEventEnum.SPIN_RESULT,
                    data: result
                });
            }

            game.callbacks.onTimeout = async () => {
                this.players = this.players.filter(bot => bot?.account?._id?.toString() !== player.account._id.toString());

                const state = player.account;
                state.status = AccountStatusEnum.IDLE;
                state.statusReason = `Timeout no bucket: ${this.bucket.name}`;
                state.bucketId = null;
                player.account = state;
                await player.save();
                await player.exit();
                await game.exit();

                useApplication().socket.desk.to(AUTH_USER_ROOM).emit(`bot-${player.account._id}`, {
                    event: GameEventEnum.TIMEOUT,
                    data: {
                        balance: game.balance
                    }
                });

                this.onPlayersChange();
            }

            try {
                await game.startGame();
            } catch (ex) {
                try {
                    player.exit();
                    game.exit();
                } catch { }
            }
        }
    }

    async onPlayerExit(player: Player) {
        if (player.cacheAttributes["bucket:processed"]) {
            return;
        }

        const state = player.account;
        player.cacheAttributes["bucket:processed"] = true;

        state.status = state.status === AccountStatusEnum.BANNED ? AccountStatusEnum.BANNED : AccountStatusEnum.IDLE;
        state.bucketId = null;
        state.statusReason = "";

        this.players = this.players.filter(bot => bot?.account?._id?.toString() !== player.account._id.toString());

        player.account = state;
        await player.save();

        this.onPlayersChange();
    }

    async executeEvent() {
        const bots = await AccountsModel.find({
            bucketId: this.bucketId,
            status: AccountStatusEnum.BUSY
        });

        logger.info(`[${this.bucket.name}] Executando evento para ${bots.length} bots`);
        this.players = bots.map(bot => new Player(bot._id.toString()));

        this.emit("bucket:players", {
            bucket: this.bucket,
            bots: this.players,
        });

        const totalPlayers = this.players.length;
        const totalTime = this.bucket.executionTime * 1000; //em ms
        const delayPerPlayer = totalTime / totalPlayers; // ms por player

        logger.info(`[${this.bucket.name}] Delay entre players: ${delayPerPlayer}ms`);

        // Finaliza automaticamente quando o tempo de execução acabar 
        if(this.bucket.type === BucketTypeEnum.GAME){
            this.exitTimeout = setTimeout(() => this.end(), totalTime + (60 * 1000) * 10); // Adiciona 10 minutos de buffer
        }else{
            this.exitTimeout = setTimeout(() => this.end(), (60 * 1000) * 40); // Tempo máximo de 40 minutos
        }

        let runningPlayers = 0;

        for (const player of this.players) {
            if(this.ended){
                clearTimeout(this.exitTimeout);
                break;
            }
            try {
                player.connect().then(() => this.onPlayerReady(player));
                player.on(PlayerEventEnum.CONNECTED, () => this.onPlayerReady(player));
            } catch (ex) {
                this.players = this.players.filter(bot => bot?.account?._id?.toString() !== player.account._id.toString());
                player.account.status = AccountStatusEnum.IDLE;
                player.account.bucketId = null;
                player.account.statusReason = `Falhou no bucket: ${this.bucket.name}`;
                await player.save();
                try { player.exit(); } catch { }
                this.onPlayersChange();
            }

            logger.info(`[${this.bucket.name}] Próxima player em ${delayPerPlayer}ms`);

            // 💡 Delay proporcional para caber tudo dentro do tempo de execução em caso do tipo de bucket ser game.
            await Delay(this.bucket.type === BucketTypeEnum.EVENT ? 1 : delayPerPlayer / 1000);

            runningPlayers++;

            if(this.bucket.type === BucketTypeEnum.GAME){
                this.bucket.statusReason = `${runningPlayers} de ${this.players.length} bots executando`;
                await this.bucket.save();
            }
        }

        this.bucket.statusReason = "Bucket rodando";
        await this.bucket.save();
    }

}

export default Bucket;