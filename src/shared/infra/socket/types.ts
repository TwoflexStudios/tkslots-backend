import { Socket } from "socket.io";
import { UserAuthenticated } from "../../../services/token";

export interface ConnectedUser {
    user: UserAuthenticated,
    socket: Socket
}

export interface SocketContext {
    connectedUsers: ConnectedUser[];
}