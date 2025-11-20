import { Socket } from "socket.io";
import { SocketContext } from "../types";
import { AUTH_USER_ROOM } from "../../http/app";

export const onGetOnlineUsers = (socket: Socket, context: SocketContext) => {
    socket.on("get_online_users", () => {
        const connectedUsersUnique = [...new Map(context.connectedUsers.map(user => [user.user.id, user])).values()];
        
        socket.to(AUTH_USER_ROOM).emit("online_users", connectedUsersUnique.map(user => ({
            id: user.user.id,
            name: user.user.name,
        })));
    });
};