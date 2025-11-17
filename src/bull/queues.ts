import { Queue } from "bullmq";
import { redisClient } from "../config/redis";

export enum QueuesEnum {
    ACCOUNT_BIND_PHONE = "ACCOUNT_BIND_PHONE",
    ACCOUNT_CHECKIN = "ACCOUNT_CHECKIN",
}

export const BindQueue = new Queue(QueuesEnum.ACCOUNT_BIND_PHONE, {connection: redisClient});
export const CheckinQueue = new Queue(QueuesEnum.ACCOUNT_CHECKIN, {connection: redisClient});
