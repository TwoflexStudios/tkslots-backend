import config from "../config/convict";

const { HttpsProxyAgent } = require("https-proxy-agent");

const getProxyAgent = (session: string = crypto.randomUUID()) => {
    return new HttpsProxyAgent({
        host: "da6825c834a72c55.xji.na.novada.pro", // config.get("proxy.host"),
        username: "novada370HoF_s9msXT-zone-resi-region-br-session-{session}-sessTime-120".split("{session}").join(session), // config.get("proxy.username").split("{session}").join(session),
        port: "7777", // config.get("proxy.port"),
        password: "KCbXQBYTd4O6", // config.get("proxy.password"),
        keepAlive: true
    });
}
// {
//     host: "da6825c834a72c55.xji.na.novada.pro",
//     port: "7777",
//     user: "novada370HoF_s9msXT-zone-resi-region-br-session-{session}-sessTime-120",
//     pass: "KCbXQBYTd4O6"
// }

export {
    getProxyAgent
}