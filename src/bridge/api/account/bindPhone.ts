import { getProxyAgent } from "../../../helpers/proxy";
import { passwordGen } from "../../../helpers/simulation";
import AccountsModel, { AccountsSchema } from "../../../schemas/accounts";
import sitesModel from "../../../schemas/sites";
import { EncodePayload, getServerSyncToken, slotsApi } from "../server";
import crypto from "crypto";
import ApiLogin from "./login";
import { escape } from "querystring";

interface BindPhoneOptions {
    useAccountProxySession?: boolean;
    phoneNumber: string,
    code?: string,
    password?: string
}

interface BindResult {
    status: boolean;
    message: string;
}

/**
 * Vincular Telefone a uma conta
 * @param _account Account ou id da conta
 * @param options {}
 * @returns 
 */
const BindPhone = async (_account: AccountsSchema | string, options: BindPhoneOptions): Promise<BindResult> => {
    let account: AccountsSchema | null = null;
    const accountLogin = await ApiLogin(_account);
    if (!accountLogin.status) return accountLogin;

    if (typeof _account === "string") {
        account = await AccountsModel.findOne({ _id: _account });
    } else {
        account = await AccountsModel.findOne({ _id: (_account as any)._id });
    }

    if (!account || account == null) {
        return { status: false, message: "Conta não encontrada" }
    }

    const {
        device,
        proxySession
    } = account.login;

    const siteInfo = await sitesModel.findOne({ _id: account.siteId });

    const proxy = getProxyAgent(options.useAccountProxySession ? proxySession : crypto.randomUUID());

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

    const password = options.password || passwordGen();

    const passwordHash = crypto.createHash("md5").update(password || "none").digest('hex')
    const bindPayload = {
        "type": 3,
        "phone": options.phoneNumber,
        "verifyCode": options.code || "",
        "phoneArea": "55",
        "UserId": String(account.uid),
        "UserName": account.login.socket.account,
        "Password": account.login.socket.password,
        "VerifyPassword": passwordHash,
        "Email": "",
        "deviceCode": account.login.device.hash,
        "token": token,
        "timestamp": time,
        "platform": account.login.device.platform
    }

    const payloadEnconded = EncodePayload(bindPayload);

    try {
        const { data } = await api.post(`/account`, payloadEnconded)
        if (data.code === 0) {
            const currentBalance = data.currentMoney;
            const rewardBonus = data.rewardMoney;
            if (siteInfo.serverInfo.RegGold !== rewardBonus) {
                await siteInfo.updateOne({
                    "serverInfo.RegGold": rewardBonus
                })
            }
            await AccountsModel.updateOne(
                { _id: (account as any)._id },
                {
                    $set: {
                        balance: currentBalance,
                        "login.phoneNumber": options.phoneNumber,
                        "login.password": password,
                    }
                }
            )

            return {
                status: true,
                message: `Número vinculado com sucesso ${decodeURIComponent(escape(data.msg))}`
            }
        } else {
            return {
                status: true,
                message: `Falha ao vincular número de telefone: ${decodeURIComponent(escape(data.msg))}`
            }
        }
    } catch (ex: any) {
        return {
            status: true,
            message: `Falha ao vincular número de telefone: ${ex?.message}`
        }
    }

}

export default BindPhone;