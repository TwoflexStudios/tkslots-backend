import { Job } from "bullmq";
import AccountsModel, { AccountStatusEnum } from "../../../schemas/accounts";
import Player from "../../../bridge/Player";

interface JobData {
    accountId: string;
}

const CheckinJob = async (job: Job<JobData>) => {
    const { accountId } = job.data;
    let account = await AccountsModel.findOne({ _id: accountId });
    if (!account) throw new Error("Conta não encontrada");

    // if(account.status !== AccountStatusEnum.IDLE) throw new Error("A conta não está livre");

    account.status = AccountStatusEnum.BUSY;
    account.statusReason = "Fazendo checkin diário";
    await account.save();

    try {
        const player = new Player(account._id.toString());

        const connected = await player.connect();

        if (connected.status) {
            await player.dailyCheckin();
        }

        account = player.account as any;

        await player.exit();
    } catch (ex: any) {
        throw new Error(ex);
    }finally{
        if(account){
            account.status = AccountStatusEnum.IDLE;
            account.statusReason = "";
            await account.save();
        }
    }
}

export default CheckinJob;