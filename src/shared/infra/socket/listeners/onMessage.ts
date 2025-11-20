import { Socket } from "socket.io";
import { SocketContext } from "../types";
import { AUTH_USER_ROOM } from "../../http/app";

export const onMessage = (socket: Socket, context: SocketContext) => {
    socket.on("message", ({ message, username, userId }) => {
        socket.to(AUTH_USER_ROOM).emit("message", { message, username, userId });
    });
};