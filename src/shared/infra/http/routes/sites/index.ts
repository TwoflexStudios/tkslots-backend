import { Router } from "express";
import AuthController from "../../../../../services/authvalidation";
import { PermissionsEnum } from "../../../../../schemas/users";
import sitesModel, { SitesSchema } from "../../../../../schemas/sites";
import { SendResponse } from "../../../../../helpers/res";
import axios from "axios";
import { getRandomDeviceId, getServerInfo, getServerSyncToken } from "../../../../../bridge/api/server";
import { PlatformEnum } from "../../../../../schemas/accounts";
import { getProxyAgent } from "../../../../../helpers/proxy";


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
        const mode = req.body.mode

        let config;

        if (mode === "automatic") {
            if (!req.body.url) return SendResponse(res, { status: false, message: "URL IS REQUIRED" });

            const url = req.body.url;

            try{
                const {data: remoteConfig} = await axios.get<SitesSchema>(`${url}/localConfig.json`);
                config = remoteConfig;
            }catch{
                return SendResponse(res, {status: false, message: "Nao foi possivel obter as informações do site"})
            }
            
        } else {
            config = req.body as SitesSchema;
        }

        const siteExist = await sitesModel.findOne({ url: req.body.url });
        const httpURL = config.connection.http.endsWith("/") ? config.connection.http.slice(0, -1) : config.connection.http;

        //getBasic info
        const result = await getServerInfo(httpURL, getProxyAgent())

        if(!result) return SendResponse(res, {status: false, message: "Nao foi possivel obter as informações do site"})

        const configParsed = {
            ...config,
            url: req.body.url,
            connection: {
                ...config.connection,
                http: httpURL,
                tcp: {
                    host: config.connection.tcp.host
                }
            },
            serverInfo: result
        }
        
        if(siteExist){
            await siteExist.updateOne(configParsed)
        }else{
            const site = new sitesModel(configParsed)
            await site.save()
        }

        SendResponse(res, { status: true, message: siteExist ? "Site atualizado" : "Site adicionado", data: configParsed })
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