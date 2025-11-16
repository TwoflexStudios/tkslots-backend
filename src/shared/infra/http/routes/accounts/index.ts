import { Router } from "express";
import AuthController from "../../../../../services/authvalidation";
import AccountsController from "../../../../../controllers/accounts/AccountsController";

const AccountsRoutes = Router();

AccountsRoutes.get(
    "/", 
    AuthController.QueryAuth(), 
    AccountsController.listAccounts()
)

AccountsRoutes.get(
    "/create-test-account", 
    AccountsController.createTestAccount()
)

export default AccountsRoutes;