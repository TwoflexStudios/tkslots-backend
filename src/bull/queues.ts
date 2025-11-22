import { Queue } from "bullmq";
import { redisClient } from "../config/redis";

export enum QueuesEnum {
    FETCH_PENDING_BIND = "Validar contas pendentes de telefone",
    ACCOUNT_BIND_PHONE = "Vincular telefone",
    FETCH_PENDING_CHECKIN = "Validar contas pendentes de checkin",
    ACCOUNT_CHECKIN = "Fazer checkin",
    RUN_SCHEDULED_BUCKETS = "Iniciar buckets agendados",
    ADD_BOT = "Adicionar bots",
}

export const BindCronQueue = new Queue(QueuesEnum.FETCH_PENDING_BIND, {connection: redisClient});
export const AddBotsQueue = new Queue(QueuesEnum.ADD_BOT, {connection: redisClient});
export const CheckinCronQueue = new Queue(QueuesEnum.FETCH_PENDING_CHECKIN, {connection: redisClient});
export const BindQueue = new Queue(QueuesEnum.ACCOUNT_BIND_PHONE, {connection: redisClient});
export const CheckinQueue = new Queue(QueuesEnum.ACCOUNT_CHECKIN, {connection: redisClient});
export const RunScheduledBucketsQueue = new Queue(QueuesEnum.RUN_SCHEDULED_BUCKETS, {connection: redisClient});

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

RunScheduledBucketsQueue.add(
    "Executar buckets agendados",
    {},
    {
        repeat: {
            every: 5 * 60 * 1000 // 5 minutos
        },
        jobId: "run-scheduled-buckets" // garante que só existe um
    }
)