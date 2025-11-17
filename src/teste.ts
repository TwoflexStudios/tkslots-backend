import GameSocketBridge from "./bridge/protocol/GameSocketBridge";
import GameProtocolHelper from "./bridge/protocol/GameProtocolHelper";
import AccountsModel from "./schemas/accounts";
import ApiLogin from "./bridge/api/account/login";
import { getProxyAgent } from "./helpers/proxy";

const DevelopFunction = async () => {
    const agent = getProxyAgent();
    const account = await AccountsModel.findOne({_id: "69198ed1a4d8a78300da5f45"});

    if(!account) return;

    const protocolHelper = new GameProtocolHelper();
    await protocolHelper.loadFromFolder("./src/protobuff/");
    
    const socket = new GameSocketBridge("wss://wss.king699.com", protocolHelper, {
        heartBeat: true,
        proxyAgent: agent
    });

    const login = await ApiLogin(account, false, agent);

    if(!login.status){
        return;
    }

    socket.onReady = () => {
        socket.request("c2s_lobby_login", {
            data: {
                ab: 100,
                account: login.account,
                password: login.password,
                deviceCode: account.login.device.id,
                deviceType: account.login.device.platform,
            }
        }, ({data}) => {
            console.log(data)
            socket.close();
        })
    }

    await socket.init();
    
}

export default DevelopFunction;