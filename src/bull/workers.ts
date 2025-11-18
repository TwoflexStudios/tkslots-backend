import { CreateWorker } from "./helpers";
import { QueuesEnum } from "./queues";
import { redisClient } from "../config/redis";
import BindPhoneNumberJob from "./processor/account/binding";
import pendingBinding from "./processor/cron/pendingBinding";
import pendingCheckin from "./processor/cron/pendingCheckin";
import CheckinJob from "./processor/account/checkin";


/**
 * BIND PHONE
 */
CreateWorker({
    name: QueuesEnum.ACCOUNT_BIND_PHONE,
    callback: BindPhoneNumberJob,
    connection: redisClient,
    concurrency: 5,
})

/**
 * PENDING BIND
 */
CreateWorker({
    name: QueuesEnum.FETCH_PENDING_BIND,
    callback: pendingBinding,
    connection: redisClient,
    concurrency: 1,
})

/**
 * PENDING CHECKIN
 */
CreateWorker({
    name: QueuesEnum.FETCH_PENDING_CHECKIN,
    callback: pendingCheckin,
    connection: redisClient,
    concurrency: 1,
})

/**
 * DAILY CHECKIN
 */
CreateWorker({
    name: QueuesEnum.ACCOUNT_CHECKIN,
    callback: CheckinJob,
    connection: redisClient,
    concurrency: 5,
})
