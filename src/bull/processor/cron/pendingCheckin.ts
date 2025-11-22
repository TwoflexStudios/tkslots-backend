import { Job } from "bullmq";
import AccountsModel, { AccountStatusEnum } from "../../../schemas/accounts";
import { CheckinQueue } from "../../queues";

const pendingCheckin = async (job: Job) => {
    const delayMultiplyGroup: any = {
        
    }

    const accounts = await AccountsModel.find({
        status: AccountStatusEnum.IDLE, // Somente contas parada
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
    
    

    accounts.map(item => {
        if(!delayMultiplyGroup[item.siteId.toString()]){
            delayMultiplyGroup[item.siteId.toString()] = 1;
        }else{
            delayMultiplyGroup[item.siteId.toString()]++;
        }

        CheckinQueue.add(
        "Daily Checkin", 
            {accountId: item._id},
            {
                attempts: 5,
                delay: (Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000) * delayMultiplyGroup[item.siteId.toString()],
            }
        )
    })
}

export default pendingCheckin;
