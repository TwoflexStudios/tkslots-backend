import { Types } from "mongoose";
import { GetQueueState, QueueEnum, QueueStateEnum, SetQueueState } from ".";
import logger from "../config/pino";
import AccountsModel, { AccountStateEnum } from "../schemas/accounts";
import { Delay } from "../helpers/delay";

const Checkin = async (_accountId: string | Types.ObjectId) => {
    const account = await AccountsModel.findOne({ _id: _accountId });
    if(!account) return;

    logger.info(`[CHECKIN QUEUE]: Fazendo checkin para conta ${account.username}`);

    account.state = AccountStateEnum.CHECKING_IN; // Fazendo checkin
    await account.save();

    //Gerar um tempo pra não entrar em todas as contas ao mesmo tempo
    const minTime = 60;
    const maxTime = 240;

    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
    logger.warn(`[CHECKIN QUEUE]: Checkin de ${account.username} agendado para ${randomTime} segundos`);

    await Delay(randomTime);

    //@TODO: Fazer checkin no socket

    account.state = AccountStateEnum.READY;
    account.lastCheckin = new Date();
    await account.save();
}

/**
 * Esta queue serve para fazer checkin diário
 */
const CheckinQueue = async () => {
    //Queue is idle
    if (GetQueueState(QueueEnum.BINDING).state === QueueStateEnum.IDLE) return;
    
    logger.info(`[CHECKIN QUEUE]: Verificando contas`)

    //Get accounts with lastCheckin null or older than 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const pendingCheckin = await AccountsModel.find({
        state: AccountStateEnum.READY,
        $or: [
            { lastCheckin: null },
            { lastCheckin: { $lt: oneDayAgo } }
        ]
    });

    const totalPending = pendingCheckin.length;

    // SetQueueState(QueueEnum.CHECKIN, QueueStateEnum.IDLE); 

    if (totalPending > 0) {
        pendingCheckin.map(item => Checkin(item._id));
    }
}

export default CheckinQueue;