import { Request, Response, Router } from "express";
import fs from "fs";
import AuthController from "../../../../../services/authvalidation";
import AccountsModel from "../../../../../schemas/accounts";
import config from "../../../../../config/convict";

const GameHostRoutes = Router();

GameHostRoutes.get("localConfig.json", (req,res) => {
    res.status(200).send("Replaced");
})

GameHostRoutes.get(
    "/:accountId",
    AuthController.QueryAuth(),
    async (req: Request, res: Response) => {
        const disableProxy = req.query.disableProxy === "true";
        const forceProxySession = req.query.forceProxySession
        const accountData: any = await AccountsModel.findOne
            ({_id: req.params.accountId})
            .populate("siteId")

        if(!accountData){
            return res.status(404).json({status: "Error", message: "Account not found"})
        }

        let template = fs.readFileSync("./public/game/index.html", "utf-8");

        template = template.split("{{thisUrl}}").join(config.get("thisUrl"))
        template = template.split("{{game_data}}").join(`
            window.GAME_DATA = {
                account: ${JSON.stringify({
                    ...(accountData)._doc as any,
                    states: {}
                })},
                localConfig: ${JSON.stringify({
                    ...(accountData.siteId)._doc,
                    bFastLogin: true,
                    connection: {
                        ...accountData.siteId.connection,
                        http: disableProxy ? `${accountData.siteId.connection.http}/` : `${config.get("thisUrl")}/proxy/${(forceProxySession || accountData.login.proxySession || crypto.randomUUID())}?url=${accountData.siteId.connection.http}/`
                    }
                } as any)}
            }    
        `)

        //send html
        res.status(200).send(template)
    }
)

export default GameHostRoutes;