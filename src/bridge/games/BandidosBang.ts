import { Delay } from "../../helpers/delay";
import { toBRL } from "../../helpers/toBRL";
import { GamesEnum } from "../../schemas/bucket";
import { csGameRoll, scGameRoll } from "../../types/protobuff/bandidos_bang";
import Game, { GameOptions, GameStatusEnum } from "./Game";

interface BandidosBangGameOptions extends GameOptions {
    
}

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

class BandidosBangGame extends Game {
    public options: BandidosBangGameOptions;

    constructor(options: BandidosBangGameOptions) {
        super(100042, GamesEnum.BandidosBang, commands, options);
        this.options = options;
    }

    start() {
        this.desk.socket.request("c2s_auto_sit", {});
        this.desk.socket.on("s2c_g_state" as any, (data) => {
            console.log(data, "STATE")
        })
        this.roll();
    }

    async roll() {
        if(!this.check()) return;
        await Delay(2); // Aguarda 2 segundos para garantir que o jogo esteja pronto
        this.desk.onRoll(this.bet)

        const rollResult = await this.desk.socket.requestAsync<scGameRoll, csGameRoll>("c2s_game_roll" as any, {
            data: {
                betScore: this.bet,
                type: 1
            }
        }, 5000)

        if(rollResult === "TIMEOUT") {
            this.roll();
            return;
        };

        const { data } = rollResult;
        
        this.result({
            bet: this.bet,
            balance: data.userScore,
            winAmount: data.winScore,
            bonus: false
        })

        this.roll();
    }
}

export default BandidosBangGame;