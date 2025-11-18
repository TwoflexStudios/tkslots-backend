import axios, { AxiosInstance } from "axios";
import config from "../../config/convict";
import { Delay } from "../../helpers/delay";
import { CodeEventsEnum } from "../../globals/enums/CodeEventsEnum";

interface ModuleOptions {
    retry?: number;
    service: string;
    country: string;
    price: {
        from?: number;
        max?: number;
        providerId?: number;
    }
}

interface GetPhoneNumberErrorResponse {
    status: false;
    message: string;
}

interface GetPhoneNumberResponse {
    status: true;
    data: { activationId: string, phoneNumber: string };
}


class BowerModule {

    private api: AxiosInstance;
    private retryCount = 0;
    private codeMonitorInterval: any;

    constructor() {
        this.api = axios.create({
            baseURL: "https://smsbower.online",
        })

        this.api.interceptors.request.use(_config => {
            _config.params = {
                ..._config.params,
                api_key: config.get("bower.apiKey")
            }

            return _config;
        })

        this.api.interceptors.response.use((res) => res, (err) => {
            console.log(err.response)
        })
    }

    async getProvider(options: ModuleOptions): Promise<null | string> {
        let providerId = null;

        if (options.price.providerId) {
            return String(options.price.providerId);
        }

        if (options.price.from) {
            const { data: prices } = await this.api.get("", {
                params: {
                    action: "getPricesV3",
                    service: options.service,
                    country: options.country,
                }
            })


            const price = Object.keys(prices[options.country][options.service]);
            let oldCount = 0;

            for (let i = 0; i < price.length; i++) {
                const priceCode: any = price[i];
                const priceContent = prices[options.country][options.service][priceCode];

                if (priceContent.count > oldCount && priceContent.price === Number(options.price.from)) {
                    providerId = priceContent.provider_id;
                }
            }
        }

        return providerId;
    }

    async getPhoneNumber(options: ModuleOptions): Promise<GetPhoneNumberResponse | GetPhoneNumberErrorResponse> {
        let providerId = await this.getProvider(options);

        const payload = {
            action: "getNumberV2",
            service: options.service,
            country: options.country,
            ...(options.price.max && { maxPrice: options.price.max }),
            ...(providerId && { providerIds: providerId })
        }

        const { data: response } = await this.api.get("/stubs/handler_api.php", {
            params: payload
        })

        if (response.phoneNumber) {
            const number = String(response.phoneNumber).split("");
            number.splice(0, 2);
            return {
                status: true,
                data: {
                    activationId: response.activationId,
                    phoneNumber: number.join("")
                }
            }
        } else {
            if (options.retry && this.retryCount < options.retry) {
                await Delay(5);
                this.retryCount += 1;
                return await this.getPhoneNumber(options);
            } else {
                return {
                    status: false,
                    message: response
                }
            }
        }
    }

    async getCode(activationId: string) {
        try {
            const { data } = await this.api.get("", {
                params: {
                    action: "getStatus",
                    id: activationId,
                }
            })

            if (data.includes("STATUS_WAIT_RETRY") || data.includes("STATUS_OK")) {
                return {
                    status: true,
                    data: {
                        code: data.split(":")[1]
                    }
                }
            } else {
                return {
                    status: false,
                    message: data
                }
            }
        } catch (error) {
            return {
                status: false,
                message: error
            }
        }
    }

    async setStatus(activationId: string, status: number) {
        await this.api.get("", {
            params: {
                action: "setStatus",
                id: activationId,
                status,
            }
        })
    }

    async cancelPhoneNumber(activationId: string) {
        await this.setStatus(activationId, 8);
    }

    async finishActivation(activationId: string) {
        await this.setStatus(activationId, 6);
    }

    async createListener(activationId: string) {
        const timeout = 120000; // 2 minutos
        const halfTime = 60000; // 1 minuto
        const interval = 5000; // 5 segundos

        const start = Date.now();
        let halfEmitted = false;

        const check = async () => {
            const elapsed = Date.now() - start;
            const remaining = timeout - elapsed;

            // Emitir HALF quando faltar <= 1 minuto
            if (!halfEmitted && remaining <= halfTime) {
                halfEmitted = true;
                this.emit(CodeEventsEnum.HALF_TIME, { activationId });
            }

            // Verificar código
            const response = await this.getCode(activationId);
            if (response?.status) {
                this.emit(CodeEventsEnum.CODE_RECEIVED, {
                    activationId,
                    code: response?.data?.code,
                });
                return; // para tudo
            }

            // Timeout total
            if (elapsed >= timeout) {
                await this.cancelPhoneNumber(activationId);
                this.emit(CodeEventsEnum.CODE_TIMEOUT, { activationId });
                return;
            }

            // Tentar novamente em 5s
            setTimeout(check, interval);
        };

        // começa o ciclo
        check();
    }

    private events: {
        [key: string]: ((...args: any[]) => void)[]
    } = {}

    on(event: CodeEventsEnum, listener: (...args: any[]) => void) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener)
    }

    emit(event: CodeEventsEnum, ...args: any[]) {
        if (!this.events[event]) {
            return
        }
        this.events[event].forEach(listener => listener(...args))
    }

}

export default BowerModule;