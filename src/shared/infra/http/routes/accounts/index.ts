import { Router } from "express";
import { AccountLoginTypeEnum, PlatformEnum } from "../../../../../schemas/accounts";
import { getRandomDeviceId } from "../../../../../bridge/api/server";
import { CreateAccount } from "../../../../../bridge/api/account";
import BindPhone from "../../../../../bridge/api/account/bindPhone";
import AuthController from "../../../../../services/authvalidation";
import AccountsController from "../../../../../controllers/accounts/AccountsController";

const AccountsRoutes = Router();

AccountsRoutes.get(
    "/", 
    AuthController.QueryAuth(), 
    AccountsController.listAccounts()
)

AccountsRoutes.post(
    "/create-test-account", 
    AuthController.QueryAuth(), 
    AccountsController.createTestAccount()
)

export default AccountsRoutes;