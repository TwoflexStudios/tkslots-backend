import axios, { Axios } from "axios";
import config from "../../config/convict";
import { Delay } from "../../helpers/delay";
import { CodeEventsEnum } from "../../globals/enums/CodeEventsEnum";

interface ModuleOptions {
    retry?: number;
    service: string;
    country: string;
    price: {
        max?: number;
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



class SMSActivateModule {

    //@ts-ignore
    private api: Axios;
    private retryCount = 0;
    private codeMonitorInterval: any;
    private events: {
        [key: string]: ((...args: any[]) => void)[]
    } = {}

    constructor() {
        this.api = axios.create({
            baseURL: "https://api.sms-activate.ae/stubs/handler_api.php",
        })

        this.api.interceptors.request.use((_config: any) => {
            _config.params = {
                ..._config.params,
                api_key: config.get("activate.apiKey")
            }

            return _config;
        })

        this.api.interceptors.response.use((res: any) => res, (err: any) => {
            console.log(err.response)
        })
    }
    async getPhoneNumber(options: ModuleOptions): Promise<GetPhoneNumberResponse | GetPhoneNumberErrorResponse> {
        const payload = {
            action: "getNumberV2",
            service: options.service,
            country: options.country,
            fixedPrice: true,
            ...(options.price.max && { maxPrice: Number(options.price.max) }),
        }

        const { data: response } = await this.api.get("", {
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

export default SMSActivateModule;