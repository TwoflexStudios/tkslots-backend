import { Queue } from "bullmq";
import { redisClient } from "../config/redis";

export enum QueuesEnum {
    FETCH_PENDING_BIND = "FETCH PENDING BIND",
    ACCOUNT_BIND_PHONE = "ACCOUNT_BIND_PHONE",
    FETCH_PENDING_CHECKIN = "FETCH PENDING CHECKIN",
    ACCOUNT_CHECKIN = "ACCOUNT_CHECKIN",
}

export const BindCronQueue = new Queue(QueuesEnum.FETCH_PENDING_BIND, {connection: redisClient});
export const CheckinCronQueue = new Queue(QueuesEnum.FETCH_PENDING_CHECKIN, {connection: redisClient});
export const BindQueue = new Queue(QueuesEnum.ACCOUNT_BIND_PHONE, {connection: redisClient});
export const CheckinQueue = new Queue(QueuesEnum.ACCOUNT_CHECKIN, {connection: redisClient});

BindCronQueue.add(
    "Obter contas pendentes de bind",
    {},
    {
        repeat: {
            every: 5 * 60 * 1000 // 5 minutos
        },
        jobId: "fetch-pending-bind" // garante que só existe um
    }
)


CheckinCronQueue.add(
    "Obter contas pendentes de checkin",
    {},
    {
        repeat: {
            every: 5 * 60 * 1000 // 5 minutos
        },
        jobId: "fetch-pending-checkin" // garante que só existe um
    }
)