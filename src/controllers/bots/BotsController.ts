import { Request, Response } from "express";
import { getRandomDeviceId } from "../../bridge/api/server";
import { AccountLoginTypeEnum, PlatformEnum } from "../../schemas/accounts";
import { CreateAccount } from "../../bridge/api/account";
import { SendResponse } from "../../helpers/res";
import { AddBotsQueue } from "../../bull/queues";

interface CreateBotsDTO {
    siteId: string;
    quantity: number;
    needPhone: boolean;
    platform: PlatformEnum;
}

class BotsController {
    static createBots = (req: Request, res: Response) => {
        const { siteId, quantity, needPhone, platform } = req.body;

        const listenKey = crypto.randomUUID();

        for(var i = 0; i < quantity; i++){
            const [deviceId, hash, gpsId] = getRandomDeviceId(platform);
            AddBotsQueue.add("Create Bot", {
                listenKey,
                account: {
                    mode: AccountLoginTypeEnum.GUEST,
                    needPhone: needPhone,
                    device: {
                        id: deviceId,
                        gpsId: gpsId,
                        hash: hash,
                        platform: platform
                    }
                },
                siteId: siteId
            }, {attempts: 2})
        }

        return SendResponse(res, {
            status: true,
            message: "Bots adicionados a fila de criação",
            data: {
                listenKey
            }
        })
    }
}

export default BotsController;