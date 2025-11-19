import express from "express";
import cors from "cors";
import routes from "./routes/base";
import { BullMonitorExpress } from "tk-monitor/src/express";
import { BullMQAdapter } from "tk-monitor/src/root/bullmq-adapter";
import { BindCronQueue, BindQueue, CheckinCronQueue, CheckinQueue } from "../../../bull/queues";
import { Namespace, Server } from "socket.io";

interface SocketList {
    desk: Namespace,
    chat: Namespace
}

class App {
    private static instance: App | null = null;

    public app: express.Application;

    public socket: SocketList = {
        desk: null as any,
        chat: null as any
    };

    // Construtor privado → só pode ser criado via getInstance()
    private constructor() {
        this.app = express();
        this.customize();
    }

    // Método para obter a instância única
    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    public initSocket(io: Server) {
        this.socket.desk = io.of("/desk");
        this.socket.chat = io.of("/chat");

        this.socket.chat.on("connection", (socket) => {
            socket.on("message", ({message, username}) => {
                socket.broadcast.emit("message", {message, username});
            });
        });
    }

    private customize() {
        this.app.use(express.json());
        this.app.use(cors({ origin: "*" }));
        this.loadRoutes();
    }

    private loadRoutes() {
        this.app.set("query parser", "extended");
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static("./public"));
        this.app.use("/", routes);

        const monitor = new (BullMonitorExpress as any)({
            queues: [
                new BullMQAdapter(BindCronQueue as any),
                new BullMQAdapter(CheckinCronQueue as any),
                new BullMQAdapter(BindQueue as any),
                new BullMQAdapter(CheckinQueue as any),
            ],
            gqlIntrospection: true,
            metrics: {
                collectInterval: { hours: 1 },
                maxMetrics: 100,
                blacklist: ["1"]
            }
        });

        monitor.init().then(() => {
            this.app.use("/tk-queue", monitor.router as any);
        });

        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error(err);

            if (err.name === "ValidationError") {
                const errors: Record<string, string> = {};

                Object.keys(err.errors).forEach(key => {
                    errors[key] = err.errors[key].message;
                });

                return res.status(400).json({
                    message: "Validation failed",
                    errors
                });
            }

            res.status(err.status || 500).json({
                message: err.message || "Internal Server Error"
            });
        });
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`🚀 App running at port: ${port}`);
        });
    }
}

export const useApplication = App.getInstance

export default App;
