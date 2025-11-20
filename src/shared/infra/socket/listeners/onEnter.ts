import { Socket } from "socket.io";
import { DecodeToken } from "../../../../services/token";
import { SocketContext } from "../types";
import { AUTH_USER_ROOM } from "../../http/app";
import { onMessage } from "./onMessage";
import { onDisconnect } from "./onDisconnect";
import { onGetOnlineUsers } from "./onGetOnlineUsers";
import { onUseCodeGen } from "./onUseCodeGen";

export const onEnter = (socket: Socket, context: SocketContext) => {
    socket.on("enter", async ({ token }: { token: string }) => {
        socket.join(AUTH_USER_ROOM);

        const decoded = await DecodeToken(token);
        if (decoded) {
            context.connectedUsers.push({
                user: decoded,
                socket: socket
            });

            // Registrar outros listeners após autenticação
            onMessage(socket, context);
            onDisconnect(socket, context);
            onGetOnlineUsers(socket, context);
            onUseCodeGen(socket, context);

            const connectedUsersUnique = [...new Map(context.connectedUsers.map(user => [user.user.id, user])).values()];
            
            context.connectedUsers.forEach(user => {
                user.socket.emit("online_users", connectedUsersUnique.map(u => ({
                    id: u.user.id,
                    name: u.user.name,
                })));
            });
        }
    });
};