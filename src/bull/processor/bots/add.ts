import { Job } from "bullmq";
import { RegisterOptionsBase } from "../../../bridge/api/account/register";
import { CreateAccount } from "../../../bridge/api/account";
import { useApplication } from "../../../shared/infra/http/app";

interface JobData {
    listenKey: string;
    account: RegisterOptionsBase;
    siteId: string;
}

const addBotJob = async (job: Job<JobData>) => {
    const { data: {account, siteId, listenKey} } = job;
    const result = await CreateAccount(siteId, account);

    if(!result.status){
        throw new Error(result.message);
    }

    useApplication().socket.desk.emit(listenKey, {
        status: true,
        data: result.data
    })

    return result.data;
}

export default addBotJob;