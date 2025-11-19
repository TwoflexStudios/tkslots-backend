import mongoose, { Schema, Document, Model } from "mongoose";

export enum PlatformEnum {
    IOS = 0,
    ANDROID = 1,
    WEB = 4,
    NATIVE = 2
}

export enum AccountStatusEnum {
    PLAYING = "playing", // Jogando
    PENDING = "pending", // Criada
    BUSY = "busy", // Ocupada
    IDLE = "idle", // Parada
    READY = "ready", // Pronta para ser coletada por um agente
    DONE = "done", // Concluida
    IN_PROGRESS = "in_progress", // Com um agente
    BANNED = "banned", // Baniu
    FAILED = "failed", // Zerou o saldo
    BIND_FAILED = "bind_failed" // Falha ao vincular telefone
}

export enum DepositStatusEnum {
    PAID = 3,
    PENDING = 2,
    EXPIRED = 1
}

export enum WithdrawStatusEnum {
    FAILED = 6,
    PENDING = 1,
    SUCCESS = 5
}

export enum AccountLoginTypeEnum {
    GUEST = 1,
    PHONE_NUMBER = 2
}

export interface AccountDeposits {
    transactionId: string;
    amount: number;
    link?: string;
    gateway: string;
    gatewayId: number;
    date: Date;
    status: DepositStatusEnum;
}

export interface AccountsWithdraws {
    transactionId: string;
    amount: number;
    pix: string;
    description?: string;
    status: WithdrawStatusEnum;
    date: Date;
}

export interface AccountLoginInfo {
    type?: AccountLoginTypeEnum;
    phoneNumber?: string;
    password?: string;
    device: {
        id: string;
        gpsId: string;
        platform: PlatformEnum;
        hash: string;
    };
    socket: {
        session?: string;
        account: string;
        password: string;
        sessionDate?: Date;
    };
    proxySession: string;
}

interface AccountState {
    logs: {
        type: string;
        message: string;
        date: Date;
    }[];
    retries: {
        login: number,
        bind: number
    }
}

export interface AccountsSchema {
    siteId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId | null;
    uid: number | null;
    username: string | null;
    vipLevel: number;
    source?: string;
    status: AccountStatusEnum;
    annotations: {
        title: string;
        description: string;
    }[]
    needPhone?: boolean;
    statusReason?: string;
    balance: number;
    login: AccountLoginInfo;
    deposits: AccountDeposits[];
    withdraws: AccountsWithdraws[];
    states: AccountState;
    checkinDay: number;
    lastCheckin: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

// Subschemas

const AccountDepositsSchema = new Schema<AccountDeposits>({
    transactionId: { type: String },
    amount: { type: Number },
    link: { type: String },
    gateway: { type: String },
    gatewayId: { type: Number },
    date: { type: Date },
    status: { type: Number }
});

const AccountsWithdrawsSchema = new Schema<AccountsWithdraws>({
    transactionId: { type: String },
    amount: { type: Number },
    pix: { type: String },
    description: { type: String },
    status: { type: Number  },
    date: { type: Date }
});

const AccountLoginInfoSchema = new Schema<AccountLoginInfo>({
    type: { type: Number, enum: AccountLoginTypeEnum, default: AccountLoginTypeEnum.GUEST },
    phoneNumber: { type: String },
    password: { type: String },
    device: {
        id: { type: String, required: true },
        gpsId: { type: String, required: true },
        hash: { type: String, required: true },
        platform: { type: Number, enum: PlatformEnum, required: true }
    },
    socket: {
        session: {type: String, default: null},
        account: { type: String },
        password: { type: String },
        sessionDate: { type: Date, default: null }
    },
    proxySession: String
});

// Main schema

const LogSchema = new Schema({
    type: String,
    message: String,
    date: Date
}, { _id: false });

const AccountStateSchema = new Schema({
    logs: [LogSchema],
    retries: {
        login: Number,
        bind: Number
    }
});
const AccountsSchemaMongoose = new Schema<AccountsSchema>({
    siteId: { type: Schema.Types.ObjectId, required: true, ref: "sites" },
    userId: { type: Schema.Types.ObjectId, ref: "users", default: null },
    uid: { type: Number, default: null },
    username: { type: String, default: null },
    vipLevel: { type: Number, default: 0 },
    needPhone: { type: Boolean, default: false },
    source: { type: String, default: null },
    annotations: {
        type: [{
            title: { type: String, default: null },
            description: { type: String, default: null }
        }],
        default: [],
        _id: false
    },
    status: { type: String, enum: AccountStatusEnum, default: AccountStatusEnum.PENDING },
    statusReason: { type: String, default: "" },
    balance: { type: Number, default: 0 },
    login: { type: AccountLoginInfoSchema, required: true },
    deposits: { type: [AccountDepositsSchema], default: [] },
    withdraws: { type: [AccountsWithdrawsSchema], default: [] },
    lastCheckin: { type: Date, default: null },
    checkinDay: { type: Number, default: 0 },
    states: { type: AccountStateSchema, default: {logs: [], retries: {login: 0, bind: 0}} }
}, { timestamps: true });

const AccountsModel: Model<AccountsSchema> = mongoose.model<AccountsSchema>("accounts", AccountsSchemaMongoose);

export default AccountsModel;
