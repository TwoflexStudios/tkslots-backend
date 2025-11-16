import { Router } from "express";
import AuthController from "../../../../../services/authvalidation";
import { PermissionsEnum } from "../../../../../schemas/users";
import sitesModel from "../../../../../schemas/sites";
import { SendResponse } from "../../../../../helpers/res";
import axios from "axios";

interface SiteObject {
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
}

interface Connection {
    http: string;
    tcp: Tcp;
}

interface Tcp {
    host: string;
}

const SitesRoutes = Router();

SitesRoutes.get(
    "/",
    AuthController.QueryAuth(),
    AuthController.CheckPermission(PermissionsEnum.SITES),
    async (req, res) => {
        const sites = await sitesModel.find({});
        return res.status(200).json({ status: true, data: sites || [] })
    }
)


SitesRoutes.post(
    "/",
    AuthController.QueryAuth(),
    AuthController.CheckPermission(PermissionsEnum.SITES),
    async (req, res) => {
        const type = req.body.url ? "automatic" : "manual";

        if (type === "automatic") {
            if (!req.body.url) return SendResponse(res, { status: false, message: "URL IS REQUIRED" });

            const url = req.body.url;

            await axios.get<SiteObject>(`${url}/localConfig.json`).then(async ({ data }) => {
                const site = new sitesModel({
                    url,
                    name: data.gameTitle,
                    apiUrl: data.connection.http.slice(0, -1),
                    socketUrl: data.connection.tcp.host.split("wss://")[1],
                    localKey: "0x134b04e"
                })

                await site.save()
            }).catch(ex => {
                return SendResponse(res, { status: false, message: "Não foi possível obter os dados do site" })
            });
        } else {
            const data = req.body as SiteObject;

            if (!data.connection?.tcp?.host || !data?.connection?.http || !data.gameTitle) {
                return SendResponse(res, { status: false, message: "Dados do site inválidos." })
            }

            const site = new sitesModel({
                url: data.connection.http.split("login.")[1]?.split("/")[0]?.slice(0, -1),
                name: data.gameTitle,
                apiUrl: data.connection.http,
                socketUrl: data.connection.tcp.host.split("wss://")[1],
                localKey: "0x134b04e"
            })

            await site.save()
        }

        SendResponse(res, { status: true, message: "Site Added" })
    }
)

SitesRoutes.delete(
    "/:siteId",
    AuthController.QueryAuth(),
    AuthController.CheckPermission(PermissionsEnum.SITES),
    async (req, res) => { 
        const siteId = req.params.siteId;

        await sitesModel.deleteOne({_id: siteId});

        return SendResponse(res, {status: true, message: "Site deletado"})
    }
)

export default SitesRoutes;