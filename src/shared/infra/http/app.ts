import express from "express";
import cors from "cors";
import routes from "./routes/base";

class App {

    private app: express.Application;

    constructor(){
        this.app = express();
        this.customize();
    }

    customize(){
        this.app.use(express.json());
        this.app.use(cors({
            origin: "*"
        }))
        this.loadRoutes();
    }

    loadRoutes(){
        this.app.use("/", routes);

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

    listen(port: number){
        this.app.listen(port, () => {
            console.log(`🚀 App running at port: ${port}`)
        })
    }

}

export default App;