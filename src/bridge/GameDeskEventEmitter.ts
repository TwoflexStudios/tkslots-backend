import { EventEmitter } from "stream";

export enum GameEventsEnum {
    GAME_ROLL = 'roll',
    GAME_ROLL_RESULT = 'roll_result',
    GAME_WIN = 'win',
    GAME_LOSE = 'lose',
    GAME_ERROR = 'error',
    GAME_EXIT = 'exit'
}

abstract class GameDeskEventEmitter extends EventEmitter {
    protected constructor() {
        super();
    }
    addListener<K extends keyof typeof GameEventsEnum | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.addListener(event as any, listener);
    }
    on<K extends keyof typeof GameEventsEnum | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.on(event as any, listener);
    }

    once<K extends keyof typeof GameEventsEnum | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.once(event as any, listener);
    }
}

export default GameDeskEventEmitter;