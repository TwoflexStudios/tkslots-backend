import mongoose, { Schema } from "mongoose";

export enum SmsProviderEnum {
    BOWER = "bower",
    ACTIVATE = "activate"
}

interface ConfigSchema {
    providers: [
        {
            provider: SmsProviderEnum;
            apiKey: string;
        }
    ];
    sms: {
        provider: SmsProviderEnum;
        service: string;
        price: {
            max?: number;
            from?: number;
            providerId?: string;
        }
    }
    createdAt: Date;
    updatedAt: Date;
}

const ConfigModel = new Schema<ConfigSchema>({
    sms: {
        provider: {
            type: String,
            enum: SmsProviderEnum,
            default: SmsProviderEnum.ACTIVATE
        },
        service: {
            type: String,
            default: ""
        },
        price: {
            max: {
                type: Number,
                default: 0
            },
            from: {
                type: Number,
                default: 0
            },
            providerId: {
                type: String,
                default: ""
            }
        }
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
}, { timestamps: true })

const configModel = mongoose.model<ConfigSchema>("config", ConfigModel);

export default configModel;