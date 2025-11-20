import mongoose, { Schema } from "mongoose";
import { BetController } from "../bridge/games/Game";

export enum GamesEnum {
    BandidosBang = "bandidos_bang",
    
}

export enum BucketStatusEnum {
    PENDING = "pending",
    RUNNING = "running",
    PAUSED = "paused",
    STOPPED = "stopped",
    COMPLETED = "completed",
    FAILED = "failed",
}

interface GameOptions {
    minToWin: number;
    betController: BetController;
}

interface options {
    bots: number; // number of bots to play
    minBalance: number; // minimum balance of bots to start
    repeat: "none" | "daily" | "weekly" | "monthly";
    repeatTime: string; //ex: 06:00
    gameOptions: GameOptions;
}

interface BucketSchema {
    site: mongoose.Types.ObjectId;
    name: string;
    status: BucketStatusEnum;
    game: GamesEnum;
    options: options;
    startAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const BucketOptionsSchema = new Schema<options>({
    bots: { type: Number, default: 50 },
    minBalance: { type: Number, default: 10 },
    repeat: { type: String, enum: ["none", "daily", "weekly", "monthly"], default: "none" },
    repeatTime: { type: String, default: "" },
    gameOptions: {
        minToWin: { type: Number, default: 150 },
        betController: { type: Object, default: {} }
    }
})

const BucketModel = new Schema<BucketSchema>({
    site: { type: Schema.Types.ObjectId, required: true, ref: "sites" },
    name: { type: String, default: "" },
    game: {
        type: String,
        enum: GamesEnum,
        default: GamesEnum.BandidosBang
    },
    options: BucketOptionsSchema,
    startAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: BucketStatusEnum,
        default: BucketStatusEnum.PENDING
    }
}, { timestamps: true })

const bucketModel = mongoose.model<BucketSchema>("buckets", BucketModel);

export default bucketModel;