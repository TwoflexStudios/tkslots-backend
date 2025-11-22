import { Socket } from "socket.io";
import { SocketContext } from "../types";
import BowerModule from "../../../../services/code/Bower";
import { CodeEventsEnum } from "../../../../globals/enums/CodeEventsEnum";

export const onUseCodeGen = (socket: Socket, context: SocketContext) => {
    socket.on("useCodeGen", async ({ type, service }: { type: "phone" | "email" | "domain-list" , service: string }) => {
        try {
            
            if(type === "domain-list"){
                return []
            }

            const bowerModule = new BowerModule();

            bowerModule.on(CodeEventsEnum.CODE_RECEIVED, (data) => {
                socket.emit("responseCodeGen", {
                    type: "received",
                    data: {
                        id: data.activationId,
                        code: data.code
                    }
                });
            })

            bowerModule.on(CodeEventsEnum.CODE_TIMEOUT, (data) => {
                socket.emit("responseCodeGen", {
                    type: "canceled",
                    data: {
                        id: data.activationId
                    }
                });
            })

            const phone = await bowerModule.getPhoneNumber({
                country: "73",
                service: service,
                price: {
                    max: 0.0503
                }
            })

            if (!phone.status) {
                socket.emit("responseCodeGen", {
                    type: "error",
                    data: {
                        message: phone.message
                    }
                });
                return;
            }

            socket.emit("responseCodeGen", {
                type: "success",
                data: {
                    id: phone.data?.activationId,
                    value: phone.data?.phoneNumber
                }
            });

            bowerModule.createListener(phone.data?.activationId);
        } catch {
            socket.emit("responseCodeGen", {
                type: "error",
                data: {
                    message: `Falha ao obter um ${type == "phone" ? "telefone" : "email"}`
                }
            });
        }
    });
}