import mongoose, { Schema } from "mongoose";

export interface SiteServerInfo {
  svrTime: number;
  appVer: string;
  resVer: string;
  luaVer: string;
  RegGold: number;
  adjust: boolean;
  RegNeedCode: boolean;
  bGetHost: boolean;
  appkey: null;
  event: any[];
  code: number;
  msg: string;
}

export interface SitesSchema {
  url: string;
  mode: "automatic" | "manual";
  defaultChannel: string;
  translateRate: number;
  bTranslateCoin: boolean;
  bShowJackpot: boolean;
  bNeedEnsurePsw: boolean;
  bPreview: boolean;
  bSupportGuestLogin: boolean;
  bFastLogin: boolean;
  currency: string;
  language: string;
  defaultAreaCode: string;
  connection: Connection;
  gameTitle: string;
  gameIconUrl: string;
  loginLogoUrl: string;
  fastLoginTimeLimit: number;
  areaCodeList: string[];
  bHasLobby: boolean;
  bSkipTrackOnSubgame: boolean;
  shopVideoHelpCfg: any[];
  bDownNeendBindPhone: boolean;
  assetsVersion: number;
  serverInfo: SiteServerInfo;
}

interface Connection {
  http: string;
  tcp: Tcp;
}

interface Tcp {
  host: string;
}

const ServerInfo = new Schema<SiteServerInfo>({
    svrTime: Number,
    appVer: String,
    resVer: String,
    luaVer: String,
    RegGold: Number,
    adjust: Boolean,
    RegNeedCode: Boolean,
    bGetHost: Boolean,
    appkey: String,
    event: [Object],
    code: Number,
    msg: String
})

const SitesModel = new Schema<SitesSchema>({
    url: String,
    mode: String,
    defaultChannel: String,
    translateRate: Number,
    bTranslateCoin: Boolean,
    bShowJackpot: Boolean,
    bNeedEnsurePsw: Boolean,
    bPreview: Boolean,
    bSupportGuestLogin: Boolean,
    bFastLogin: Boolean,
    currency: String,
    language: String,
    defaultAreaCode: String,
    connection: {
        http: String,
        tcp: {
            host: String
        }
    },
    gameTitle: String,
    gameIconUrl: String,
    loginLogoUrl: String,
    fastLoginTimeLimit: Number,
    areaCodeList: [String],
    bHasLobby: Boolean,
    bSkipTrackOnSubgame: Boolean,
    shopVideoHelpCfg: [Object],
    bDownNeendBindPhone: Boolean,
    assetsVersion: Number,
    serverInfo: ServerInfo
}, { timestamps: true })

const sitesModel = mongoose.model<SitesSchema>("sites", SitesModel);

export default sitesModel;