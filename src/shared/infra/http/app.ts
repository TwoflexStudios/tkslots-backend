import express from "express";
import cors from "cors";
import routes from "./routes/base";
import { BullMonitorExpress } from "tk-monitor/src/express";
import { BullMQAdapter } from "tk-monitor/src/root/bullmq-adapter";
import { BindCronQueue, BindQueue, CheckinCronQueue, CheckinQueue } from "../../../bull/queues";

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.customize();
    }

    customize() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: "*"
        }))
        this.loadRoutes();
    }

    loadRoutes() {
        this.app.set("query parser", "extended");
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static("./public"))
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
                blacklist: ['1'],
            },
        });
        

        monitor.init().then(() => {
            this.app.use("/tk-queue", monitor.router as any);
        });

        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error(err); // para logar no console do servidor

            if (err.name === "ValidationError") {
                // Erro do Mongoose
                const errors: Record<string, string> = {};
                Object.keys(err.errors).forEach(key => {
                    errors[key] = err.errors[key].message;
                });
                return res.status(400).json({
                    message: "Validation failed",
                    errors
                });
            }

            // Qualquer outro erro
            res.status(err.status || 500).json({
                message: err.message || "Internal Server Error"
            });
        });
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log(`🚀 App running at port: ${port}`)
        })
    }

}

export default App;