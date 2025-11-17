import { EventEmitter } from "stream";
import { Client2ServerCommands, Server2ClientCommands } from "../../helpers/commands";

abstract class GameSocketEventEmitter extends EventEmitter {
    protected constructor() {
        super();

        // do stuff here
    }
    addListener<K extends keyof typeof Server2ClientCommands | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.addListener(event as any, listener);
    }
    on<K extends keyof typeof Server2ClientCommands | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.on(event as any, listener);
    }

    once<K extends keyof typeof Server2ClientCommands | symbol>(event: K, listener: (...args: any) => void) {
        // do stuff here
        return super.once(event as any, listener);
    }
}

export default GameSocketEventEmitter;