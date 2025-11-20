import { Socket } from "socket.io";
import { SocketContext } from "../types";

export const onDisconnect = (socket: Socket, context: SocketContext) => {
    socket.on("disconnect", () => {
        const connectedUsersUnique = [...new Map(context.connectedUsers.map(user => [user.user.id, user])).values()];
        const newConnectedUsers = connectedUsersUnique.filter(user => user.socket.id !== socket.id);
        
        context.connectedUsers.forEach(user => {
            user.socket.emit("online_users", newConnectedUsers.map(u => ({
                id: u.user.id,
                name: u.user.name,
            })));
        });
    });
};