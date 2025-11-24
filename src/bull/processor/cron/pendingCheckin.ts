import { Job } from "bullmq";
import AccountsModel, { AccountStatusEnum } from "../../../schemas/accounts";
import { CheckinQueue } from "../../queues";
import { format } from "date-fns";

const pendingCheckin = async (job: Job) => {
    const delayMultiplyGroup: any = {
        
    }

    const accounts = await AccountsModel.find({
        status: AccountStatusEnum.IDLE, // Somente contas parada
        allowCheckin: true,
        $or: [
            {
                lastCheckin: null,
                uid: {$ne: null}
            },
            {
                lastCheckin: {
                    $lt: new Date(new Date().setDate(new Date().getDate() - 1))
                }
            }
        ]
    });

    accounts.map(async item => {
        item.status = AccountStatusEnum.BUSY;
        item.statusReason = "Fazendo checkin";
        await item.save();

        if(!delayMultiplyGroup[item.siteId.toString()]){
            delayMultiplyGroup[item.siteId.toString()] = 1;
        }else{
            delayMultiplyGroup[item.siteId.toString()]++;
        }

        CheckinQueue.add(
        "Daily Checkin", 
            {accountId: item._id},
            {
                jobId: `checkin-${item._id}-${format(new Date(), "dd/MM/yyyy")}`,
                attempts: 5,
                delay: (Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000) * delayMultiplyGroup[item.siteId.toString()],
            }
        )
    })
}

export default pendingCheckin;
