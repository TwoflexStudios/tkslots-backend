import mongoose, { Schema } from "mongoose";

export enum SmsProviderEnum {
    BOWER = "bower",
    ACTIVATE = "activate"
}

export interface ConfigSchema {
    sms: {
        provider: SmsProviderEnum;
        payload: {
            retry?: number;
            service: string;
            country: string;
            price: {
                from?: string;
                max?: string;
                providerId?: string;
            }
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
        payload: {
            retry: {
                type: Number,
                default: 3
            },
            service: {
                type: String,
                default: ""
            },
            country: {
                type: String,
                default: ""
            },
            price: {
                max: {
                    type: String,
                    default: "0"
                },
                from: {
                    type: String,
                    default: "0"
                },
                providerId: {
                    type: String,
                    default: ""
                }
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