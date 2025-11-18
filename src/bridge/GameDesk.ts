import { toBRL } from "../helpers/toBRL";
import { ChannelEnum } from "../types/GameNetNode";
import { csAskenterroom, csGameroomList, scAskenterroom, scGameroomList } from "../types/protobuff/pb_game";
import { csRoomLogon, scGameInfo, scRoomLogonResult } from "../types/protobuff/pb_game_manage";
import GameDeskEventEmitter, { GameEventsEnum } from "./GameDeskEventEmitter";
import GameRunner from "./GameRunner";
import { GameRollResult } from "./games/Game";
import Player from "./Player";
import GameProtocolHelper from "./protocol/GameProtocolHelper";
import GameSocketBridge from "./protocol/GameSocketBridge";

class GameDesk extends GameDeskEventEmitter {
    public player: Player;
    private runner: GameRunner;
    //@ts-ignore
    public socket: GameSocketBridge;

    public gameSession: scRoomLogonResult | null = null;

    constructor(player: Player, runner: GameRunner){
        super();
        this.player = player;
        this.runner = runner;
    }

    async startGame(): Promise<{status: boolean, message: string}> {
        const roomRes = await this.player.socket.requestAsync<scGameroomList, csGameroomList>("c2s_game_room", {
            data: {
                gameId: this.runner.game.gameId
            }
        })

        if(roomRes === "TIMEOUT") return {status: false, message: "Tempo limite ao buscar sala"}

        const roomId = roomRes.data.rooms[0]?.roomId;
        if(!roomId) return {status: false, message: "Sala não encontrada"}

        const roomConnectionWSRes = await this.player.socket.requestAsync<scAskenterroom, csAskenterroom>("c2s_enter_room", {
            data: {
                roomId,
                gameId: this.runner.game.gameId
            }
        })

        if(roomConnectionWSRes === "TIMEOUT") return {status: false, message: "Tempo limite ao entrar na sala"}

        this.player.location = ChannelEnum.GAME;
        
        this.socket = new GameSocketBridge(
            roomConnectionWSRes.data.serverIp,
            this.runner.protocolHelper,
            {
                channel: ChannelEnum.GAME,
                heartBeat: false,
                proxyAgent: this.player.proxyAgent
            }
        )

        this.socket.on("s2c_g_login_ok", ({data}: {data: scRoomLogonResult}) => {this.onLoginSuccess(data)})
        this.socket.on("s2c_g_login_err", (data) => this.onLoginError(data))
        this.socket.on("s2c_g_login_finish", (data) => this.onEnterGame())
        this.socket.onClose = () => this.onLoginError("Conexão fechada")

        this.socket.onReady = () => {
            this.socket.request<scRoomLogonResult, csRoomLogon>("c2s_g_login", {
                channelid: ChannelEnum.LOBBY,
                data: {
                    gameVer: 0,
                    md5Pass: "",
                    nameID: 0,
                    roomVer: 0,
                    session: String(this.player.session?.session),
                    userID: 0
                }
            })
        }

        await this.socket.init();

        return {status: true, message: "Conectado"}
    }

    async onLoser(){
        await this.player.save();
        await this.exit();
        this.emit(GameEventsEnum.GAME_LOSE)
    }

    async onWinner(){
        await this.player.save();
        await this.exit();
        this.emit(GameEventsEnum.GAME_WIN)
    }

    async onRoll(bet: number){
        this.emit(GameEventsEnum.GAME_ROLL, bet)
    }

    async exit(){
        this.socket.request("c2s_g_exit", {});
        this.socket.close();
        await this.player.save();
        this.emit(GameEventsEnum.GAME_EXIT)
    }

    async onRollResult(rollResult: GameRollResult){
        const {bet, balance, winAmount, bonus} = rollResult;
        this.player.account.balance = balance;

        this.player.log(`🎮 [Bandidos Bang] Ganhou: ${toBRL(winAmount / 100)} | Saldo atual: ${toBRL(balance / 100)} | Aposta: ${toBRL(bet / 100)} | Bonus: ${bonus ? "Sim" : "Não"}`, "debug");
        this.emit(GameEventsEnum.GAME_ROLL_RESULT, rollResult)
    }

    onEnterGame(){
        this.runner.setGameDesk(this);
        this.runner.play();
    }

    onLoginSuccess(data: scRoomLogonResult){
        this.gameSession = data;
        this.player.log(`Sucesso ao entrar no jogo: ${this.runner.game.gameId}`, "success")
    }

    onLoginError(err: any){
        this.player.log(`Erro ao entrar no jogo: ${this.runner.game.gameId}, ${err}`, "error")
    }
}

export default GameDesk;