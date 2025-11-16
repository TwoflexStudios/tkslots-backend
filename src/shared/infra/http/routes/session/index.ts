import { Router, Request } from "express";
import userModel, { UserStatusEnum } from "../../../../../schemas/users";
import { ComparePassword } from "../../../../../services/password";
import { DecodeToken, SigninUser } from "../../../../../services/token";
import AuthController from "../../../../../services/authvalidation";
import { SendResponse } from "../../../../../helpers/res";


const SessionRoutes = Router();

//Login
SessionRoutes.post("/", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).json({ status: false, message: "Usuário e/ou senha inválidos" })
    }

    const userInfo = await userModel.findOne({ username, status: UserStatusEnum.ACTIVE });

    if (!userInfo) {
        return res.status(401).json({ status: false, message: "Usuário e/ou senha inválidos" })
    }

    const passwordMatch = await ComparePassword(password, userInfo.password);

    if (!passwordMatch) {
        return res.status(401).json({ status: false, message: "Usuário e/ou senha inválidos" })
    }

    const token = await SigninUser({
        id: userInfo._id.toString(),
        name: userInfo.name,
        permissions: userInfo.permissions,
        username: userInfo.username
    })

    return res.status(401).json(
        {
            status: true, token, user: {
                name: userInfo.name,
                username: userInfo.username,
                permissions: userInfo.permissions,
            }
        }
    );
})

SessionRoutes.get("/", AuthController.QueryAuth(), async (req: Request, res) => {
    const user = await userModel.findOne({_id: req.userAuthenticated.id, status: UserStatusEnum.ACTIVE});

    if(!user) {
        return SendResponse(res, {status: false, message: "Need login"}, 401);
    }

    return SendResponse(res, {status: true, data: {...(user as any)._doc, password: "**"}})
})

export default SessionRoutes;