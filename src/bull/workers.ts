import { CreateWorker } from "./helpers";
import { QueuesEnum } from "./queues";
import { redisClient } from "../config/redis";
import BindPhoneNumberJob from "./processor/account/binding";

CreateWorker({
    name: QueuesEnum.ACCOUNT_BIND_PHONE,
    callback: BindPhoneNumberJob,
    connection: redisClient,
    concurrency: 5,
})