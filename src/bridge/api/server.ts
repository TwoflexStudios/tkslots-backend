import axios from "axios";
import { PlatformEnum } from "../../schemas/accounts";
import crypto from "crypto";
import { Mobileheaders } from "../../helpers/simulation";
import { SiteServerInfo } from "../../schemas/sites";

export const slotsApi = (url: string, proxy: any) => axios.create({
    baseURL: url,
    httpAgent: proxy,
    httpsAgent: proxy,
    headers: Mobileheaders
})

export const getServerSyncToken = async (deviceId: string, loginUrl: string, proxyAgent: any, platform: PlatformEnum): Promise<[string, number] | false> => {
    try {
        const data = await getServerInfo(loginUrl, proxyAgent)

        if(!data) return false;

        const { svrTime } = data;

        const localStamp = Date.now();
        const D = Math.floor((localStamp - svrTime * 1000) / 1000);
        const syncStamp = svrTime + D;
        const syncTime = syncStamp;

        const deviceIdHash = crypto.createHash("md5").update(deviceId).digest("hex");

        const raw = '2021' + deviceIdHash + 'game' + syncTime.toString().substr(2);
        const token = crypto.createHash('md5').update(raw).digest('hex');

        return [token, syncTime];

    } catch (ex) {
        // console.log(ex)
        return false;
    }
}

export const getServerInfo = async (loginUrl: string, proxyAgent: any): Promise<SiteServerInfo | false> => {
    try {
        const payload = { "type": 1, "appVer": "1.0.0", "resVer": "514", "luaVer": "514", "channel": "998", "platform": PlatformEnum.ANDROID }

        const api = slotsApi(loginUrl, proxyAgent)

        const { data } = await api.post(`${loginUrl}/info`, `content=${Buffer.from(JSON.stringify(payload)).toString("base64")}`)

        return data;

    } catch (ex) {
        // console.log(ex)
        return false;
    }
}

export const EncodePayload = (payload: Object) => `content=${Buffer.from(JSON.stringify(payload)).toString("base64")}`


export const GetRandomBaseDevice = () => {
    const validCombinations = [
        { engine: 'Unity', platforms: ['Android', 'iOS'] },
        { engine: 'Chrome', platforms: ['Windows', 'Linux', 'macOS'] },
        { engine: 'Edge', platforms: ['Windows', 'macOS'] },
        { engine: 'Firefox', platforms: ['Windows', 'Linux', 'macOS'] },
        { engine: 'Safari', platforms: ['iOS', 'macOS'] },
        { engine: 'Electron', platforms: ['Windows', 'Linux', 'macOS'] },
        { engine: 'ReactNative', platforms: ['Android', 'iOS'] },
        { engine: 'Flutter', platforms: ['Android', 'iOS'] },
        { engine: 'Cordova', platforms: ['Android', 'iOS'] },
    ];

    const selected: any = validCombinations[Math.floor(Math.random() * validCombinations.length)];
    
    const platform = selected.platforms[Math.floor(Math.random() * selected.platforms.length)];

    const randomNumber = Math.floor(Math.random() * 1000);
    const timestamp = Date.now().toString().substring(2);

    return `${selected.engine}_${platform}_${randomNumber}_${timestamp}`;
};


/**
 * Get Random Android Device Id
 * @returns [deviceId, deviceIdHash, gpsId]
 * @reference: 
 * if (k['isBrowser'] || k['os'] == k['OS']['WINDOWS']) {
        var E = m['storage']['get'](x['storageKey']['webDeviceCode'], '');
        if (v['StringIsNullOrEmpty'](E))
            E = k['browserType'] + '_' + k['os'] + '_' + Math['floor'](0x3e8 * Math['random']()) + '_' + Date['now']()['toString'](),
                m['storage']['set'](x['storageKey']['webDeviceCode'], E);
        D['deviceCode'] = E;
    } else
        k['isNative'] && (D['deviceCode'] = w['getDevicesID']()); -> [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    this['state'] = D;
}
 */
export const getRandomDeviceId = (platform: PlatformEnum): [string, string, string] => {
    let deviceId = "";
    
    if(platform !== PlatformEnum.WEB){
        deviceId = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    if(platform === PlatformEnum.WEB){
        deviceId = GetRandomBaseDevice();
    }

    return [deviceId, crypto.createHash('md5').update(deviceId).digest('hex'), `gps_adid=${crypto.randomUUID()}`];
}