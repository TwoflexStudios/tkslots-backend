import mongoose, { Schema } from "mongoose";

interface SitesSchema {
    name: string;
    url: string;
    apiUrl: string;
    bonus: number,
    localKey: string;
    socketUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const SitesModel = new Schema<SitesSchema>({
    name: String,
    url: String,
    apiUrl: String,
    bonus: Number,
    localKey: String,
    socketUrl: String,
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
}, { timestamps: true })

const sitesModel = mongoose.model<SitesSchema>("sites", SitesModel);

export default sitesModel;