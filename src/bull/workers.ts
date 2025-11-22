import { CreateWorker } from "./helpers";
import { QueuesEnum } from "./queues";
import { redisClient } from "../config/redis";
import BindPhoneNumberJob from "./processor/account/binding";
import pendingBinding from "./processor/cron/pendingBinding";
import pendingCheckin from "./processor/cron/pendingCheckin";
import CheckinJob from "./processor/account/checkin";
import addBotJob from "./processor/bots/add";


/**
 * BIND PHONE
 */
CreateWorker({
    name: QueuesEnum.ACCOUNT_BIND_PHONE,
    callback: BindPhoneNumberJob,
    connection: redisClient,
    concurrency: 30,
})

/**
 * PENDING BIND
 */
CreateWorker({
    name: QueuesEnum.FETCH_PENDING_BIND,
    callback: pendingBinding,
    connection: redisClient,
    concurrency: 1,
    removeOnComplete: {count: 10},
})

/**
 * PENDING CHECKIN
 */
CreateWorker({
    name: QueuesEnum.FETCH_PENDING_CHECKIN,
    callback: pendingCheckin,
    connection: redisClient,
    concurrency: 1,
    removeOnComplete: {count: 10},
})

/**
 * DAILY CHECKIN
 */
CreateWorker({
    name: QueuesEnum.ACCOUNT_CHECKIN,
    callback: CheckinJob,
    connection: redisClient,
    concurrency: 50,
})

/**
 * ADD BOTS
 */
CreateWorker({
    name: QueuesEnum.ADD_BOT,
    callback: addBotJob,
    connection: redisClient,
    concurrency: 50
})

