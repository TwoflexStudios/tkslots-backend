import { Router } from "express";
import BotsController from "../../../../../controllers/bots/BotsController";
import AuthController from "../../../../../services/authvalidation";
import { PermissionsEnum } from "../../../../../schemas/users";

const BotsRoutes = Router();

BotsRoutes.post(
    "/", 
    AuthController.HeaderAuth(), 
    AuthController.CheckPermission(PermissionsEnum.CREATE_BOTS), 
    BotsController.createBots
)

export default BotsRoutes;