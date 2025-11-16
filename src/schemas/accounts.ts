import mongoose, { Schema, Document, Model } from "mongoose";

export enum PlatformEnum {
    IOS = 0,
    ANDROID = 1,
    WEB = 4,
    NATIVE = 2
}

export enum AccountStateEnum {
    //States padrões Pending (Criada) > Binding (Bindando) > Ready (Pronto)
    BINDING = "binding", // Bindando telefone
    PENDING = "pending", // Criada (Fila de bind vai puxar depois)
    READY = "ready", // Pronto pra ser puxada por qualquer fila

    //Errors das filas
    BIND_FAILED = "bind_failed",

    //States das filas
    CHECKING_IN = "checking_in"
}

export enum AccountStatusEnum {
    CREATED = "created", // Criada
    READY = "ready", // Pronta para ser coletada por um agente
    IN_PROGRESS = "in_progress", // Com um agente
    BANNED = "banned", // Baniu
    FAILED = "failed" // Zerou o saldo
}

export enum DepositStatusEnum {
    PAID = 3,
    PENDING = 2,
    EXPIRED = 1
}

export enum WithdrawStatusEnum {
    FAILED = 6,
    SUCCESS = 5
}

export enum AccountLoginTypeEnum {
    GUEST = 1,
    PHONE_NUMBER = 2
}

export interface AccountDeposits {
    transactionId: string;
    amount: number;
    link: string;
    gateway: string;
    gatewayId: number;
    date: Date;
    status: DepositStatusEnum;
}

export interface AccountsWithdraws {
    transactionId: string;
    amount: number;
    pix: string;
    description: string;
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
    socketLogin: {
        account: string;
        password: string;
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
    needPhone?: boolean;
    stateReason?: string;
    state: AccountStateEnum;
    balance: number;
    login: AccountLoginInfo;
    deposits: AccountDeposits[];
    withdraws: AccountsWithdraws[];
    states: AccountState;
    lastCheckin: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

// Subschemas

const AccountDepositsSchema = new Schema<AccountDeposits>({
    transactionId: { type: String, required: true },
    amount: { type: Number, required: true },
    link: { type: String, required: true },
    gateway: { type: String, required: true },
    gatewayId: { type: Number, required: true },
    date: { type: Date, required: true },
    status: { type: Number, enum: DepositStatusEnum, required: true }
});

const AccountsWithdrawsSchema = new Schema<AccountsWithdraws>({
    transactionId: { type: String, required: true },
    amount: { type: Number, required: true },
    pix: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Number, enum: WithdrawStatusEnum, required: true },
    date: { type: Date, required: true }
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
    socketLogin: {
        account: { type: String },
        password: { type: String }
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
    status: { type: String, enum: AccountStatusEnum, default: AccountStatusEnum.CREATED },
    state: { type: String, enum: AccountStateEnum, default: AccountStateEnum.PENDING },
    stateReason: { type: String, default: "" },
    balance: { type: Number, default: 0 },
    login: { type: AccountLoginInfoSchema, required: true },
    deposits: { type: [AccountDepositsSchema], default: [] },
    withdraws: { type: [AccountsWithdrawsSchema], default: [] },
    lastCheckin: { type: Date, default: null },
    states: { type: AccountStateSchema, default: {logs: [], retries: {login: 0, bind: 0}} }
}, { timestamps: true });

const AccountsModel: Model<AccountsSchema> = mongoose.model<AccountsSchema>("accounts", AccountsSchemaMongoose);

export default AccountsModel;
