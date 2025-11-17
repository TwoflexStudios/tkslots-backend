import configModel, { ConfigSchema, SmsProviderEnum } from "../schemas/config"

export const getTKConfig = async () => {
    const config = await configModel.findOne();

    if(!config){

        const config: Partial<ConfigSchema> = {
            sms: {
                provider: SmsProviderEnum.ACTIVATE,
                payload: {
                    retry: 3,
                    service: "fx",
                    country: "73",
                    price: {
                        max: "0",
                        from: "0",
                        providerId: "0"
                    }
                }
            }
        }

        const configBase =await configModel.create(config)
        
        await configBase.save();

        return configBase;
    }


    return config;
}