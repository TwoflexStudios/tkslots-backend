import { Request, Response } from "express";
import { SendResponse } from "../../helpers/res";
import userModel, { PermissionsEnum } from "../../schemas/users";
import { EncryptPassword } from "../../services/password";

interface CreateUserDTO {
    name: string;
    username: string;
    password: string;
    permissions: PermissionsEnum[]
}

class UsersController {
    static async create(req: Request, res: Response) {
        const { name, username, password, permissions } = req.body;
        //checkif username already exists
        const user = await userModel.findOne({ username });
        if (user) return SendResponse(res, { status: false, message: "Este nome de usuário já existe" });

        const passwordEncoded: string = await EncryptPassword(password);

        const userCreated = await userModel.create({
            name,
            username,
            password: passwordEncoded,
            permissions
        });

        return SendResponse(res, { status: true, message: "Usuário criado com sucesso", data: userCreated });
    }

    static async list(req: Request, res: Response) {
        const users = await userModel.find();
        return SendResponse(res, { status: true, data: users.map(item => ({
            _id: item._id,
            name: item.name,
            username: item.username,
            permissions: item.permissions,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
        })) });
    }

    static async update(req: Request, res: Response) {
        const { name, username, password, permissions } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) return SendResponse(res, { status: false, message: "Usuário não encontrado" });

        const updateData: any = {
            name,
            username,
            permissions
        };

        // Só atualiza a senha se ela foi fornecida
        if (password) {
            updateData.password = await EncryptPassword(password);
        }

        const userUpdated = await userModel.updateOne({ username }, updateData);

        return SendResponse(res, { status: true, message: "Usuário atualizado com sucesso", data: userUpdated });
    }

    static async delete(req: Request, res: Response) {
        const { username } = req.body;
        const user = await userModel.findOne({ username });
        if (!user) return SendResponse(res, { status: false, message: "Usuário não encontrado" });

        const userDeleted = await userModel.deleteOne({ username });

        return SendResponse(res, { status: true, message: "Usuário deletado com sucesso", data: userDeleted });
    }
}

export default UsersController;