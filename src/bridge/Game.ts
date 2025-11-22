import { EventEmitter } from "stream";
import Player from "./Player";
import GameSocketBridge from "./protocol/GameSocketBridge";
import logger from "../config/pino";
import { ChannelEnum, GameSocketResponse } from "../types/GameNetNode";
import { csAskenterroom, csGameroomList, gameroomInfo, scAskenterroom, scGameroomList } from "../types/protobuff/pb_game";
import { csRoomLogon, scRoomLogonResult } from "../types/protobuff/pb_game_manage";
import { MergeCommands, PushCommands } from "../helpers/commands";

type LogType = "info" | "warn" | "error" | "debug" | "success";

interface ConnectionResult {
    status: boolean;
    message: string;
    data?: any;
}

export enum GameEventEnum {
    CONNECTED = "game:connected",
    DISCONNECTED = "game:disconnected",
    CONNECTION_LOST = "game:connection-lost",
    LOSE = "game:lose",
    WIN = "game:win",
    SPINING = "game:spining",
    SPIN_RESULT = "game:spin-result",
    TIMEOUT = "game:timeout"
}

export interface GameRoll {
    bet: number;
    balance: number;
    oldBalance: number;
    winAmount: number;
}

export interface GameOptions<T> {
    minToWin: number;
    controller: any;
    attributes: T
}

class Game<T> extends EventEmitter {
    // ========================================================================
    // Properties
    // ========================================================================

    // Session & States
    player: Player;
    public gameId: number;
    public roomInfo: scAskenterroom | null = null;
    public deskInfo: scRoomLogonResult | null = null;
    public balance: number = 0;
    public bet: number = 0;

    public options: GameOptions<T>;

    // Protocol & Socket
    public socket!: GameSocketBridge;

    //cache
    public cacheAttributes: Record<string, any> = {};

    public commands: any;

    constructor(player: Player, gameId: number, options: GameOptions<T>, commands: any) {
        super();
        this.player = player;
        this.gameId = gameId;
        this.options = options;
        this.commands = commands;
    }

    public log(value: string, type: LogType = "info"): void {
        logger[type](`[${this.player.account._id}:GAME_${this.gameId}_SOCKET]: ${value}`);
    }

    async connect() {
        const commandsMerged = MergeCommands(this.commands);
        this.player.protocolHelper.setCommands(commandsMerged);

        await this.initializeProtocols();
        const roomLoaded = await this.loadRoom();

        if (!roomLoaded) {
            return {
                status: false,
                message: "Falha ao obter a sala do jogo"
            }
        }

        this.createWebSocketConnection();
        this.socket.onReady = () => this.createSocketSession();
        this.socket.init()
    }

    async loadRoom() {
        this.log("Carregando jogo", "info");
        const gameInfo = await this.player.socket.requestAsync<scGameroomList, csGameroomList>("c2s_game_room", { data: { gameId: this.gameId } });

        if (gameInfo === "TIMEOUT") return false;

        const room = gameInfo.data.rooms[0];

        if (!room) return false;

        const enterRoom = await this.player.socket.requestAsync<scAskenterroom, csAskenterroom>("c2s_enter_room", {
            data: {
                gameId: this.gameId,
                roomId: room.roomId
            }
        });

        if (enterRoom === "TIMEOUT") return false;

        this.roomInfo = enterRoom.data;

        return true;
    }

    private async initializeProtocols(): Promise<void> {
        this.log("Iniciando conexão", "info");
    }

    private createWebSocketConnection(): void {
        this.log("Criando conexão com o WS");
        this.socket = new GameSocketBridge(
            this.roomInfo?.serverIp!,
            this.player.protocolHelper,
            {
                channel: ChannelEnum.GAME,
                heartBeat: false,
                proxyAgent: this.player.proxyAgent
            }
        );

        this.socket.onServerMessage = this.onServerMessage.bind(this);
        this.socket.onClose = () => {
            this.emit(GameEventEnum.CONNECTION_LOST, { state: this.player.account });
            if (this.player.reconnect) {
                this.connect();
            }
        };
    }

    private async createSocketSession() {
        this.socket.on("s2c_g_login_ok", ({ data }: { data: scRoomLogonResult }) => {
            this.deskInfo = data;
            this.emit(GameEventEnum.CONNECTED, { state: this.player.account });
            this.balance = Number(data.money)
        })

        this.socket.on("s2c_g_login_err", () => {
            this.exit();
        })

        this.socket.request<scRoomLogonResult, csRoomLogon>("c2s_g_login", {
            data: {
                session: this.player.account.login.socket.session!,
                gameVer: 0,
                md5Pass: "",
                nameID: 0,
                roomVer: 0,
                userID: 0
            }
        })
    }

    async exit() {
        // const stack = new Error().stack;
        // const caller = stack?.split('\n')[2]?.trim() || 'unknown';
        // this.log(`SOCKET FECHADO chamado de: ${caller}`, "warn");
        this.socket?.close();
        this.socket = null as any;
        this.emit(GameEventEnum.DISCONNECTED);
    }

    calculateBet() {
        const currentBalance = Number(this.balance) / 100;
        const betLevels = Object.keys(this.options.controller)
            .map(Number)
            .filter(num => !isNaN(num))
            .sort((a, b) => a - b);

        const selectedBetLevel = betLevels.reduce((acc, level) => (level <= (currentBalance) ? level : acc), betLevels[0]);
        //@ts-ignore
        const newBet = this.options.controller[selectedBetLevel].bet * 100;

        if (newBet !== this.bet) {
            this.setBet(newBet);
        }
    }

    setBet(bet: number) {
        this.bet = bet;
    }

    onServerMessage(command: string | null, decoded: GameSocketResponse): void {
        // Override this method in subclasses if needed
    }
}

export default Game;