import { Router } from "express";
import SessionRoutes from "./session";
import AccountsRoutes from "./accounts";
import SitesRoutes from "./sites";

const routes = Router();

routes.use("/session", SessionRoutes)
routes.use("/accounts", AccountsRoutes)
routes.use("/sites", SitesRoutes)

export default routes;