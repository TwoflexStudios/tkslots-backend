import mongoose, { Schema } from "mongoose";

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
    game: string;
    options: GameOptions;
}


export interface BucketSchema {
    name: string;
    site: string;
    bots: number;
    type: BucketTypeEnum;
    bucket: EventBucket | GameBucket;
    repeat: RepeatOptions;
    status: BucketStatusEnum;
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
        type: String,
        required: true
    },
    bots: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    bucket: {
        type: Object,
        required: true
    },
    repeat: {
        type: Object,
        default: null
    },
    status: {
        type: String,
        default: BucketStatusEnum.PENDING
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