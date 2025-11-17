import crypto from "crypto";
import { getProxyAgent } from "../../../helpers/proxy";
import AccountsModel, { AccountLoginTypeEnum, AccountsSchema } from "../../../schemas/accounts";
import sitesModel from "../../../schemas/sites";
import { EncodePayload, getServerSyncToken, slotsApi } from "../server";

interface LoginError {
    status: false,
    message: string
}

interface LoginSuccess {
    status: true
    account: string;
    password: string;
}

const ApiLogin = async (_account: AccountsSchema | string, useAccountProxySession = false, proxyAgent?: any): Promise<LoginError | LoginSuccess> => {

    let account: AccountsSchema | null = null;

    if (typeof _account === "string") {
        account = await AccountsModel.findOne({ _id: _account });
    } else {
        account = await AccountsModel.findOne({ _id: (_account as any)._id });
    }

    if (!account || account == null) {
        return { status: false, message: "Conta não encontrada" }
    }

    const {
        type,
        device,
        phoneNumber,
        password,
        proxySession
    } = account.login;

    const siteInfo = await sitesModel.findOne({ _id: account.siteId });

    const proxy = proxyAgent || getProxyAgent(useAccountProxySession ? proxySession : crypto.randomUUID());

    if (!siteInfo) {
        return { status: false, message: "Site inválido" }
    }

    const api = slotsApi(siteInfo.connection.http, proxy);

    const loginToken = await getServerSyncToken(
        device.id,
        siteInfo.connection.http,
        proxy,
        device.platform
    );

    if (!loginToken) {
        if (!loginToken) return { status: false, message: "Não foi possível obter um token de login" }
    }

    const [token, time] = loginToken;

    const payload: any = {
        "loginType": type,
        "deviceType": device.platform,
        "deviceCode": device.hash,
        "token": token,
        "timestamp": time,
        "adid": device.gpsId,
        "channel": "998",
        "fbp": "",
        "fbc": ""
    }

    if (type === AccountLoginTypeEnum.PHONE_NUMBER) {
        payload.fbp = String(password);
        payload.fbc = String(password);
        payload.mobileNumber = phoneNumber;
        payload.password = crypto.createHash('md5').update(String(password)).digest("hex")
    }

    const payloadEncoded = EncodePayload(payload);

    try {
        const { data } = await api.post(`/login`, payloadEncoded)
        await AccountsModel.updateOne(
            { _id: (account as any)._id },
            {
                $set: {
                    uid: Number(data.account.split("User")[1]),
                    username: data.account,
                    "login.socket.account": data.account,
                    "login.socket.password": data.password
                }
            }
        )

        return {
            status: true,
            ...data
        };
    } catch (ex: any) {
        return {
            status: false,
            message: `Falha ao realizar o login: ${ex.message}`
        }
    }
}

export default ApiLogin;