import GameSocketBridge from "./bridge/protocol/GameSocketBridge";
import GameProtocolHelper from "./bridge/protocol/GameProtocolHelper";
import AccountsModel from "./schemas/accounts";
import ApiLogin from "./bridge/api/account/login";
import { getProxyAgent } from "./helpers/proxy";
import Player from "./bridge/Player";
import GameRunner from "./bridge/GameRunner";
import GameDesk from "./bridge/GameDesk";
import BandidosBangGame from "./bridge/games/BandidosBang";
import crypto from "crypto";

const DevelopFunction = async () => {
    
    const player = new Player("691abdf0ce62648bbd365d59");
    const loginResult = await player.connect();

    if(!loginResult.status){
        console.log(loginResult.message, "Erro ao conectar")
        return;
    }

    const bandidosBang = new BandidosBangGame({
        minToWin: 100,
        betController: {
            0.1: {
                bet: 0.1
            },
            0.2: {
                bet: 0.2
            },
            0.4: {
                bet: 0.4
            },
            0.6: {
                bet: 0.6
            },
            0.8: {
                bet: 0.8
            },
            1: {
                bet: 0.8,
            }
        }
    });

    const runner = new GameRunner(bandidosBang, player.socket.protocolHelper);
    const game = new GameDesk(player, runner);

    await game.startGame();

}

export default DevelopFunction;