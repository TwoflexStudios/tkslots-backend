import { Router } from "express";
import SessionRoutes from "./session";
import AccountsRoutes from "./accounts";
import SitesRoutes from "./sites";
import GameHostRoutes from "./game-host";
import ProxyRoutes from "./proxy";
import BotsRoutes from "./bots";

const routes = Router();

routes.use("/session", SessionRoutes)
routes.use("/accounts", AccountsRoutes)
routes.use("/sites", SitesRoutes)
routes.use("/game-host", GameHostRoutes)
routes.use("/bots", BotsRoutes)
routes.use("/proxy", ProxyRoutes)

export default routes;