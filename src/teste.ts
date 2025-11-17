import GameSocketBridge from "./bridge/protocol/GameSocketBridge";
import GameProtocolHelper from "./bridge/protocol/GameProtocolHelper";
import AccountsModel from "./schemas/accounts";
import ApiLogin from "./bridge/api/account/login";
import { getProxyAgent } from "./helpers/proxy";
import Player from "./bridge/Player";

const DevelopFunction = async () => {
    const player = new Player("691abdf0ce62648bbd365d59");
    
    const loginResult = await player.connect();

    if(!loginResult.status){
        console.log(loginResult.message, "Erro ao conectar")
        return;
    }

    console.log("Conectado")
}

export default DevelopFunction;