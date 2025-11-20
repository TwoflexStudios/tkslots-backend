import { Socket } from "socket.io";
import { SocketContext } from "../types";
import { onEnter } from "./onEnter";

export const registerSocketListeners = (socket: Socket, context: SocketContext) => {
    onEnter(socket, context);
};