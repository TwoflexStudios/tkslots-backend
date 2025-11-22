import mongoose, { Schema } from "mongoose";

export enum GamesEnum {
    BANDIDOS_BANG = "bandidos_bang",
    RABBIT_FORTUNE = "rabbit_fortune"
}

export enum BucketTypeEnum {
    EVENT = "event",
    GAME = "game"
}

export enum BucketStatusEnum {
    SCHEDULED = "scheduled",
    PENDING = "pending",
    RUNNING = "running",
    ENDED = "ended",
    PAUSED = "paused"
}

export enum EventBucketTypeEnum {
    BONUS_EMAIL = "bonus_email",
}

export interface GameOptions {
    minToWin: number;
    betController: object;
    attributes?: object;
}

export interface RepeatOptions {
    type: "none" | "daily" | "weekly" | "monthly" | "seconds" | "minutes" | "hours";
    time: string;
}

export interface EventBucket {
    type: EventBucketTypeEnum;
    startAt: Date;
    endAt: Date;
}

export interface GameBucket {
    game: GamesEnum;
    options: GameOptions;
}


export interface BucketSchema {
    name: string;
    site: mongoose.Types.ObjectId;
    bots: number;
    type: BucketTypeEnum;
    executionTime: number;
    bucket: EventBucket | GameBucket;
    repeat: RepeatOptions;
    botBalance: number | null;
    status: BucketStatusEnum;
    statusReason: string;
    startAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BucketModel = new Schema<BucketSchema>({
    name: {
        type: String,
        required: true
    },
    site: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "sites"
    },
    bots: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    executionTime: {
        type: Number,
        required: true,
        default: 30 * 60,
    },
    bucket: {
        type: Object,
        required: true
    },
    botBalance: {
        type: Number,
        default: null
    },
    repeat: {
        type: Object,
        default: null
    },
    status: {
        type: String,
        default: BucketStatusEnum.SCHEDULED
    },
    statusReason: {
        type: String,
        default: ""
    },
    startAt: {
        type: Date,
        default: null
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
}, { timestamps: true })

const bucketModel = mongoose.model<BucketSchema>("buckets", BucketModel);

export default bucketModel;