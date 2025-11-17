import { getProxyAgent } from "../../../helpers/proxy";
import AccountsModel from "../../../schemas/accounts";
import sitesModel from "../../../schemas/sites"
import { EncodePayload, getServerSyncToken, slotsApi } from "../server";

//Solicite um código de verificação
const RequestCode = async (accountId: string, phoneNumber: string) => {
    const accountInfo = await AccountsModel.findOne({_id: accountId})
    if(!accountInfo){
        return false;
    }

    const siteInfo = await sitesModel.findOne({_id: accountInfo.siteId})

    if(!siteInfo){
        return false;
    }

    const srvToken = await getServerSyncToken(
        accountInfo?.login?.device?.id,
        siteInfo.connection.http,
        getProxyAgent(),
        accountInfo.login.device?.platform
    )

    if(!srvToken){
        return false;
    }

    const [token, time] = srvToken;

    const codePayload = {
        type: 1,
        phone: phoneNumber,
        phoneArea: "55",
        deviceCode: accountInfo?.login?.device?.hash,
        token: token,
        timestamp: time
    }

    const encodedPayload = EncodePayload(codePayload);

    try{
        await slotsApi(siteInfo.connection.http, getProxyAgent()).post("/verifyCode", encodedPayload);
        return true;
    }catch{
        return false;
    }
}


export default RequestCode;