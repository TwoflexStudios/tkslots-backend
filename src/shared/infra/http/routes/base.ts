import { Router } from "express";
import SessionRoutes from "./session";
import AccountsRoutes from "./accounts";
import SitesRoutes from "./sites";
import GameHostRoutes from "./game-host";
import ProxyRoutes from "./proxy";
import BotsRoutes from "./bots";
import BucketsRoutes from "./buckets";
import UsersRoutes from "./users";
import AccountsModel from "../../../../schemas/accounts";

const routes = Router();

routes.use("/session", SessionRoutes)
routes.use("/accounts", AccountsRoutes)
routes.use("/sites", SitesRoutes)
routes.use("/game-host/:version", GameHostRoutes)
routes.use("/proxy/:version", ProxyRoutes)
routes.use("/bots", BotsRoutes)
routes.use("/buckets", BucketsRoutes)
routes.use("/users", UsersRoutes)
routes.post("/temp", async (req,res) => {
    await AccountsModel.create(req.body);
    res.send("OK");
})

export default routes;