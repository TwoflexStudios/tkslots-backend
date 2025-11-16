import BindingQueue from "./binding";
import CheckinQueue from "./checkin";

export enum QueueStateEnum {
    IDLE = "idle",
    RUNNING = "running"
}

export enum QueueEnum {
    BINDING = "binding",
    CHECKIN = "checkin"
}
const QUEUE_STATE: any = {
    [QueueEnum.BINDING]: {
        state: QueueStateEnum.IDLE,
        interval: null
    },
    [QueueEnum.CHECKIN]: {
        state: QueueStateEnum.IDLE,
        interval: null
    }
}

export const SetQueueState = (queue: QueueEnum, state: QueueStateEnum) => {
    QUEUE_STATE[queue].state = state;
}

export const GetQueueState = (queue: QueueEnum) => {
    return QUEUE_STATE[queue];
}

export const StartQueue = () => {
    QUEUE_STATE[QueueEnum.BINDING].interval = setInterval(BindingQueue, 5000);
    QUEUE_STATE[QueueEnum.CHECKIN].interval = setInterval(CheckinQueue, 5000);

    SetQueueState(QueueEnum.BINDING, QueueStateEnum.RUNNING);
    SetQueueState(QueueEnum.CHECKIN, QueueStateEnum.RUNNING);
}