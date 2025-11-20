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

    accounts.map(item => BindQueue.add(
        "Bind Phone", 
        {accountId: item._id},
        {
            attempts: 5,
            delay: 2000,
        }
    ))
}

export default pendingBinding;
