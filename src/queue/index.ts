import BindingQueue from "./binding";

export enum QueueStateEnum {
    IDLE = "idle",
    RUNNING = "running"
}

export enum QueueEnum {
    BINDING = "binding"
}

interface QueueState {
    [QueueEnum.BINDING]: {
        state: QueueStateEnum;
        interval: NodeJS.Timeout | null;
    };
}

const QUEUE_STATE: QueueState = {
    [QueueEnum.BINDING]: {
        state: QueueStateEnum.IDLE,
        interval: null
    },
}

export const SetQueueState = (queue: QueueEnum, state: QueueStateEnum) => {
    QUEUE_STATE[queue].state = state;
}

export const GetQueueState = (queue: QueueEnum) => {
    return QUEUE_STATE[queue];
}

export const StartQueue = () => {
    QUEUE_STATE[QueueEnum.BINDING].interval = setInterval(BindingQueue, 5000);

    SetQueueState(QueueEnum.BINDING, QueueStateEnum.RUNNING);
}