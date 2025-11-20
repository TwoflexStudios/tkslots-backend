import mongoose, { Schema } from "mongoose";

export enum UserStatusEnum {
    ACTIVE = "active",
    BANNED = "banned"
}

export enum PermissionsEnum {
    ALL = "all",
    SITES = "sites",
    PLAY_GAME = "play_game",
    CREATE_BOTS = "create_bots",
    QUEUE = "queue",
    READ_BUCKETS = "read_buckets",
    CREATE_BUCKETS = "create_buckets",
    UPDATE_BUCKETS = "update_buckets",
    DELETE_BUCKETS = "delete_buckets",
    START_BUCKETS = "start_buckets",
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