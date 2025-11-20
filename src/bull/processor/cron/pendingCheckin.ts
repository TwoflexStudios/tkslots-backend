import { Job } from "bullmq";
import AccountsModel, { AccountStatusEnum } from "../../../schemas/accounts";
import { CheckinQueue } from "../../queues";

const pendingCheckin = async (job: Job) => {
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

    accounts.map(item => CheckinQueue.add(
        "Daily Checkin", 
        {accountId: item._id},
        {
            attempts: 5,
            delay: Math.floor(Math.random() * (120000 - 5000 + 1)) + 5000,
        }
    ))
}

export default pendingCheckin;
