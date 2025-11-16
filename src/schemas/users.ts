import mongoose, { Schema } from "mongoose";

export enum UserStatusEnum {
    ACTIVE = "active",
    BANNED = "banned"
}

export enum PermissionsEnum {
    ALL = "all",
    SITES = "sites"
}

interface UsersModel {
    name: string;
    username: string;
    password: string;
    status: UserStatusEnum;
    permissions: PermissionsEnum[];
    createdAt: Date;
    updatedAt: Date;
}

const usersSchema = new Schema<UsersModel>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: UserStatusEnum,
    },
    permissions: {
        type: [String],
        enum: PermissionsEnum
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
}, {timestamps: true})

const userModel = mongoose.model<UsersModel>("users", usersSchema);

export default userModel;