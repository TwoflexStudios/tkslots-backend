import { Client2ServerCommands } from "../helpers/commands";

export enum ChannelEnum {
    LOBBY = 0,
    GAME = 1
}

export interface Header {
    uMessageSize?: number;
    bMainID: number;
    bAssistantID: number;
    bHandleCode: number;
    inbReserve: number;
}

export interface Payload {
    [key: string]: any;
}

export interface Packet<T = any> {
    channelid?: ChannelEnum,
    data?: T,
    header?: Header
}

export interface RequestQeue {
    cmd: string;
    cmdName: string;
    rspObject: string;
    buffer: any;
    urgent: boolean;
    rspCmd: string;
    callback: any;
}

export interface GameSocketResponse<T = any> {
    header: {
        uMessageSize: any;
        bMainID: any;
        bAssistantID: any;
        bHandleCode: any;
        inbReserve: any;
    };
    data: T;
    cmd: string;
    cmdName: string;
    command: {
        name: string,
        mainID: string,
        aID: string,
        file: string,
        pak: string,
        command: string,
        listen: string
    }
    callback: string;
}