import AccountsModel, { AccountLoginTypeEnum, AccountsSchema, AccountStatusEnum, PlatformEnum } from "../../../schemas/accounts";
import sitesModel from "../../../schemas/sites";
import { EncodePayload, getServerSyncToken, slotsApi } from "../server";
import { getProxyAgent } from "../../../helpers/proxy";
import crypto from "crypto";
import { passwordGen } from "../../../helpers/simulation";

interface RegisterWithPhoneNumberOptions {
    mode: AccountLoginTypeEnum.PHONE_NUMBER,
    allowCheckin?: boolean,
    source?: string;
    account: {
        phoneNumber: string;
        code?: string;
        password?: string;
    },
    device: {
        id: string;
        gpsId: string;
        hash: string;
        platform: PlatformEnum
    }
}

interface RegisterWithDeviceOptions {
    mode: AccountLoginTypeEnum.GUEST,
    needPhone?: boolean;
    allowCheckin?: boolean,
    source?: string;
    device: {
        id: string;
        gpsId: string;
        hash: string;
        platform: PlatformEnum
    }
}

export type RegisterOptionsBase = RegisterWithPhoneNumberOptions | RegisterWithDeviceOptions

interface CreationResultError {
    status: false,
    message: string;
}

const CreateAccount = async (siteId: string, options: RegisterOptionsBase): Promise<CreationResultError | { status: true, data: AccountsSchema }> => {
    const siteInfo = await sitesModel.findOne({ _id: siteId });
    const proxyAgentSession = crypto.randomUUID();
    const proxy = getProxyAgent(proxyAgentSession);
    const password = "account" in options ? options?.account.password || passwordGen() : passwordGen();

    if (!siteInfo) {
        return {
            status: false,
            message: `Site não encontrado`
        }
    }

    const api = slotsApi(siteInfo.connection.http, proxy);

    const {
        source,
        device: {
            id: deviceId,
            gpsId,
            platform,
            hash
        }
    } = options;

    const regToken = await getServerSyncToken(
        deviceId,
        siteInfo.connection.http,
        proxy,
        platform
    );

    if (!regToken) {
        return {
            status: false,
            message: `Não foi possível obter um token de registro`
        }
    }

    const [token, time] = regToken;


    let regPayload: any = {};

    if (options.mode === AccountLoginTypeEnum.GUEST) {
        regPayload = {
            "registerType": 0,
            "deviceType": platform,
            "deviceCode": hash,
            "token": token,
            "timestamp": time,
            "sourceChannel": "998",
            "sourceUserId": source || "",
            "adid": "",
            "lan": "pt",
            "fbp": "",
            "fbc": "",
            "pixelid": "",
            "clickid": ""
        }
    }

    if (options.mode === AccountLoginTypeEnum.PHONE_NUMBER) {
        const {
            account: {
                phoneNumber,
                code
            }
        } = options;

        const passwordHash = crypto.createHash("md5").update(password || "none").digest('hex')

        regPayload = {
            registerType: AccountLoginTypeEnum.PHONE_NUMBER,
            deviceType: platform,
            deviceCode: hash,
            token: token,
            timestamp: time,
            sourceChannel: "998",
            sourceUserId: source || "",
            adid: gpsId,
            lan: "pt",
            fbp: "",
            fbc: "",
            pixelid: "",
            clickid: "",
            Email: "",
            password: passwordHash,
            phone: phoneNumber,
            phoneArea: 55,
            verifyCode: code
        }
    }

    try {
        const { data } = await api.post<{ new: boolean }>("reg", EncodePayload(regPayload))
        if (data.new) {
            //Register with successfull
            const account = new AccountsModel({
                siteId: siteInfo._id,
                allowCheckin: options.allowCheckin,
                login: {
                    type: options.mode,
                    device: options.device,
                    proxySession: proxyAgentSession,
                    ...(options.mode === AccountLoginTypeEnum.PHONE_NUMBER && {
                        phoneNumber: options.account.phoneNumber,
                        password: password
                    })
                },
                ...(options.mode === AccountLoginTypeEnum.GUEST && {
                    needPhone: options.needPhone
                }),
                balance: 0,
                source: options.source,
            })

            await account.save();

            return {
                status: true,
                data: account
            }
        }

        return {
            status: false,
            message: `Falha ao registrar: ${JSON.stringify(data)}`
        }
    } catch (ex: any) {
        return {
            status: false,
            message: `Falha ao registrar: ${ex.message}`
        }
    }

}

export default CreateAccount;