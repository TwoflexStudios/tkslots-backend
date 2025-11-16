import config from "../config/convict";

const { HttpsProxyAgent } = require("https-proxy-agent");

const getProxyAgent = (session: string = crypto.randomUUID()) => {
    return new HttpsProxyAgent({
        host: config.get("proxy.host"),
        username: config.get("proxy.username").split("{session}").join(session),
        port: config.get("proxy.port"),
        password: config.get("proxy.password"),
        keepAlive: true
    });
}

export {
    getProxyAgent
}