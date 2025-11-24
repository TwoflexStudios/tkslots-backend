import { Job } from "bullmq";
import AccountsModel, { AccountStatusEnum } from "../../../schemas/accounts";
import { BindQueue } from "../../queues";

const pendingBinding = async (job: Job) => {
    //update all accounts without need phone
    await AccountsModel.updateMany(
        {needPhone: false, status: AccountStatusEnum.PENDING}, 
        {status: AccountStatusEnum.IDLE}
    )

    const accounts = await AccountsModel.find({needPhone: true, status: AccountStatusEnum.PENDING});

    accounts.map(async item => {
        item.status = AccountStatusEnum.BUSY;
        item.statusReason = "Vinculando telefone";
        await item.save();
        
        BindQueue.add(
            "Bind Phone", 
            {accountId: item._id},
            {
                jobId: `bind-phone-${item._id}`,
                attempts: 5,
                delay: Math.floor(Math.random() * (120000 - 5000 + 1)) + 5000,
            },
        )
    })
}

export default pendingBinding;
