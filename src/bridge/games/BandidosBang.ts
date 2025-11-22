import { Delay } from "../../helpers/delay";
import { csGameRoll, scGameRoll } from "../../types/protobuff/bandidos_bang";
import Game, { GameEventEnum, GameOptions, GameRoll } from "../Game";
import Player from "../Player";

const commands = {
    "client": {
        "c2s_g_state": {
            "name": "c2s_g_state",
            "mainID": 150,
            "aID": 2,
            "file": "pb_cmd",
            "pak": ""
        },
        "c2s_game_roll": {
            "name": "c2s_game_roll",
            "mainID": 180,
            "aID": 80,
            "file": "pb_game_100042",
            "pak": "pb_game_100042.cs_game_roll"
        }
    },
    "server": {
        "s2c_g_state": {
            "name": "s2c_g_state",
            "mainID": 150,
            "aID": 2,
            "file": "pb_game_100042",
            "pak": "pb_game_100042.sc_game_info"
        },
        "s2c_game_roll": {
            "name": "s2c_game_roll",
            "mainID": 180,
            "aID": 80,
            "file": "pb_game_100042",
            "pak": "pb_game_100042.sc_game_roll"
        }
    }
}

interface Callbacks {
    onWinner: (balance: number) => void;
    onLoser: (balance: number) => void;
    onSpin: (bet: number) => void;
    onSpinResult: (result: GameRoll) => void;
    onTimeout: () => void;
}

interface BandidosBangAttributes {
    type: number;
}

class BandidosBang extends Game<BandidosBangAttributes> {

    private attemps: number = 0;

    public callbacks: Callbacks = {
        onWinner: (balance: number) => { },
        onLoser: (balance: number) => { },
        onSpin: (bet: number) => { },
        onSpinResult: (result: GameRoll) => { },
        onTimeout: () => { }
    }

    constructor(player: Player, options: GameOptions<BandidosBangAttributes>, callbacks?: Callbacks) {
        super(player, 100042, options, commands);
        this.callbacks = callbacks || this.callbacks;
    }

    async startGame() {
        await this.connect();

        while (this.deskInfo === null) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        this.socket.on("s2c_sit", ({ data }: { data: any }) => {
            this.play();
        })

        await this.socket.requestAsync("c2s_auto_sit", {});
    }

    private async play() {
        if(!this.socket) return;
        
        if (this.attemps >= 3) {
            this.callbacks.onTimeout();
            this.emit(GameEventEnum.TIMEOUT);
            return;
        }

        this.calculateBet();
        this.log(`⏳ Saldo: ${this.balance / 100} | Aposta: ${this.bet / 100}`);

        if (this.balance < this.bet) {
            this.emit(GameEventEnum.LOSE, { balance: this.balance })
            this.callbacks.onLoser(this.balance);
            this.log(`❌ Saldo: ${this.balance / 100} | Aposta: ${this.bet / 100}`);
            return;
        }

        this.callbacks.onSpin(this.bet);
        this.emit(GameEventEnum.SPINING, { bet: this.bet })

        const result = await this.socket.requestAsync<scGameRoll, csGameRoll>("c2s_game_roll" as any, {
            data: {
                betScore: this.bet,
                type: this.options.attributes.type
            }
        })

        if (result === "TIMEOUT") {
            this.attemps += 1;
            return;
        }

        const spinResult = {
            balance: this.balance / 100,
            oldBalance: Number(this.balance) / 100 - Number(result.data.winScore / 100) - Number(this.bet / 100),
            winAmount: result.data.winScore / 100,
            bet: this.bet / 100
        }

        this.emit(GameEventEnum.SPIN_RESULT, spinResult)

        this.callbacks.onSpinResult(spinResult);

        this.balance = result.data.userScore;

        if (Number(this.balance) / 100 >= this.options.minToWin) {
            //Winner
            this.log(`✅ Saldo: ${this.balance / 100} | Aposta: ${this.bet / 100} | Ganhou: ${result.data.winScore / 100}`);
            this.callbacks.onWinner(this.balance);
            this.emit(GameEventEnum.WIN, { balance: this.balance })
            return;
        }

        this.log(`⚽ Saldo: ${this.balance / 100} | Aposta: ${this.bet / 100} | Ganhou: ${result.data.winScore / 100}`);

        await Delay(3);
        this.play();
    }
}

export default BandidosBang;