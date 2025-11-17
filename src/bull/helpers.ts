import {Job, WorkerOptions, Worker} from "bullmq";
import { redisClient } from "../config/redis";
import { QueuesEnum } from "./queues";

interface IWorkOptions extends WorkerOptions {
    name: QueuesEnum;
    callback(job: Job<any>): any
}

export const CreateWorker = (options: IWorkOptions) => {
    return new Worker
    (
        options.name,
        options.callback,
        {
            ...options,
            connection: redisClient
        }
    );
}