import { Router } from "express";
import AuthController from "../../../../../services/authvalidation";
import { PermissionsEnum } from "../../../../../schemas/users";
import UsersController from "../../../../../controllers/users/UsersController";

const UsersRoutes = Router();

UsersRoutes.post(
    "/",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.USERS),
    UsersController.create
)

UsersRoutes.get(
    "/",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.USERS),
    UsersController.list
)

UsersRoutes.put(
    "/",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.USERS),
    UsersController.update
)

UsersRoutes.delete(
    "/",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.USERS),
    UsersController.delete
)

export default UsersRoutes;