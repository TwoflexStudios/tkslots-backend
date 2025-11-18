import logger from "../config/pino";
import { getProxyAgent } from "../helpers/proxy";
import AccountsModel, { AccountsSchema, AccountStatusEnum } from "../schemas/accounts";
import sitesModel, { SitesSchema } from "../schemas/sites";
import { ChannelEnum, GameSocketResponse } from "../types/GameNetNode";
import { csMailGetprop, scMailGetprop } from "../types/protobuff/pb_lobby_mail";
import { csChargeHistroy, scChargeHistroy } from "../types/protobuff/pb_lobby_mall";
import { scSigninResultEx } from "../types/protobuff/pb_lobby_signin";
import { csBankCardBindMsg, csBankCardWithdrawMsg, csBankWithdrawHistory, scBankCardInfoMsg, scBankCardWithdrawMsg, scBankWithdrawHistory } from "../types/protobuff/pb_lobby_withdraw";
import { csUserLoginHall, csUserSessionLogin, scUserLoginHall } from "../types/protobuff/pb_user";
import ApiLogin from "./api/account/login";
import GameDesk from "./GameDesk";
import GameProtocolHelper from "./protocol/GameProtocolHelper";
import GameSocketBridge from "./protocol/GameSocketBridge";
import GameSocketEventEmitter from "./protocol/GameSocketEventEmitter";
import { format } from "date-fns";

interface ConnectionResult {
    status: boolean;
    message: string;
    data?: scUserLoginHall;
}

export interface IPixBindAccount {
    pixKey: string;
    pixKeyType: "CPF" | "EMAIL" | "PHONE";
    name: string;
    document: string;
}

class Player {
    private accountId: string;
    //@ts-ignore
    public account: AccountsSchema;
    public site: SitesSchema | null = null;
    public session: scUserLoginHall | null = null;
    public status: "offline" | "online" | "reconnecting" = "offline";
    public location: ChannelEnum = ChannelEnum.LOBBY;

    public proxySessionId: string = crypto.randomUUID();
    public proxyAgent = getProxyAgent(this.proxySessionId);

    //Proto parser
    private protocolHelper: GameProtocolHelper = new GameProtocolHelper();

    //WS
    //@ts-ignore
    public socket: GameSocketBridge;

    constructor(accountId: string) {
        this.accountId = accountId;
    }

    public log(value: string, type: "info" | "warn" | "error" | "debug" | "success" = "info") {
        logger[type](`[${this.accountId}:${ChannelEnum[this.location]}]: ${value}`)
    }

    async connect(): Promise<ConnectionResult> {
        return new Promise(async (resolve) => {
            this.log(`Iniciando conexão`, "info");
            await this.protocolHelper.loadFromFolder("./src/protobuff/");
            await this.protocolHelper.loadFromFolder("./src/protobuff/games");
            this.account = await AccountsModel.findOne({ _id: this.accountId }) as any;

            if (!this.account) {
                this.log(`Conta ${this.accountId} não encontrada`, "error");
                return resolve({
                    status: false,
                    message: "Conta não encontrada"
                })
            }

            this.site = await sitesModel.findOne({ _id: this.account.siteId });

            if (!this.site) {
                this.log(`Site ${this.account.siteId} não encontrado`, "error");
                return resolve({
                    status: false,
                    message: "Site não encontrado"
                })
            }

            const currentDate = new Date();
            const lastSession = this.account.login.socket.session;
            const lastSessionDate = this.account.login.socket.sessionDate;
            let needLogin = false;

            //check if last sessionDate is older than 1 hour
            const hour = (60000 * 60) * 1;
            if ((lastSessionDate && lastSessionDate.getTime() + hour < currentDate.getTime()) || !lastSession) {
                needLogin = true;
            }

            this.log(`Verificando sessão, última sessão: ${lastSession}, última sessão data: ${format(lastSessionDate as Date, "dd/MM/yyyy HH:mm:ss")}`, "info");

            if (needLogin) {
                this.log(`Necessário fazer login`, "info");
                const loginResult = await ApiLogin(this.account, false, this.proxyAgent);
                this.log(`Login result: ${JSON.stringify(loginResult)}`, "info");
                if (!loginResult.status) {
                    this.log(`Erro ao fazer login: ${loginResult.message}`, "error");
                    return resolve({
                        status: false,
                        message: loginResult.message
                    })
                }

                this.account.login.socket.account = loginResult.account;
                this.account.login.socket.password = loginResult.password;
            }

            this.log(`Criando conexão com o WS`)
            this.socket = new GameSocketBridge(
                this.site.connection.tcp.host,
                this.protocolHelper,
                {
                    channel: ChannelEnum.LOBBY,
                    heartBeat: true,
                    proxyAgent: this.proxyAgent
                }
            )

            const loginWithSession = async () => {
                //@ts-ignore
                this.socket.request<scUserLoginHall, csUserSessionLogin>("c2s_session_verify", {
                    data: {
                        deviceCode: this.account.login.device.id,
                        session: lastSession as any,
                        uid: this.account.uid as any
                    }
                }, async ({ data }) => {
                    this.log(`Logando com a sessão salva`, "info");
                    if (!data.session) {
                        this.log(`Falha ao logar com a sessão, entrando com a usuario e senha`, "error");
                        this.account.login.socket.session = "";
                        //@ts-ignore
                        this.account.login.socket.sessionDate = null;
                        await this.save();
                        resolve(this.connect())
                        return;
                    }

                    await this.onPlayerLogin(data);
                    resolve({
                        status: true,
                        message: "Conectado",
                        data
                    })
                })
            }

            const loginWithAccount = async () => {
                //@ts-ignore
                this.socket.request<scUserLoginHall, csUserLoginHall>("c2s_lobby_login", {
                    data: {
                        ab: 100,
                        account: this.account.login.socket.account,
                        password: this.account.login.socket.password,
                        deviceCode: this.account.login.device.id,
                        deviceType: this.account.login.device.platform
                    }
                }, async ({ data }) => {
                    this.log(`Logando com a conta`, "info");
                    if(!data.session){
                        this.account.status = AccountStatusEnum.BANNED;
                        this.account.states.logs.push({
                            type: "error",
                            message: `Falha ao logar com a conta, conta banida`,
                            date: new Date()
                        })
                        await this.save();
                        resolve({
                            status: false,
                            message: "Conta banida"
                        })
                        return;
                    }

                    await this.onPlayerLogin(data);
                    resolve({
                        status: true,
                        message: "Conectado",
                        data
                    })
                })
            }

            this.socket.onReady = async () => {
                if (!this.account) return;
                if (!this.socket) return;

                if (lastSession && !needLogin) {
                    this.log(`Verificando sessão`, "info");
                    loginWithSession();
                } else {
                    this.log(`Fazendo login`, "info");
                    loginWithAccount();
                }
            };

            this.socket.onServerMessage = this.onServerMessage.bind(this);
            this.socket.onClose = this.onClose.bind(this);
            this.socket.init();

        })

    }

    //Quando a conexão for fechada
    async onClose(){
        this.status = "offline";
        await this.save();
    }

    //Quando receber uma mensagem do servidor
    onServerMessage(command: string | null, decoded: GameSocketResponse){
        
    }

    //Fazer checkin diário
    async dailyCheckin(){
        const res = await this.socket.requestAsync<scMailGetprop, any>("c2s_signin_signin", {})
        if(res === "TIMEOUT"){
            await this.save();
            return;
        }
        this.account.lastCheckin = new Date();
        await this.save();
    }

    //Salvar conta
    async save() {
        if (!this.account) return;
        await AccountsModel.updateOne({ _id: this.accountId }, this.account);
    }

    //Associar uma conta PIX
    async bindPixAccount(data: IPixBindAccount){
        const response = await this.socket.requestAsync<scBankCardInfoMsg, csBankCardBindMsg>("c2s_card_bind", {
            data: {
                bankCardInfo: JSON.stringify({
                    "upiAccount": data.pixKey,
                    "upiAccountName": data.name,
                    "eMail": "",
                    "verifyCode": "",
                    "cardType": data.pixKeyType,
                    "taxNum": data.document
                }),
                email: ""
            }
        })

        if(response === "TIMEOUT") return false;

        const cardInfo = await this.socket.requestAsync<scBankCardInfoMsg, any>("c2s_card_bind_info", {});

        if(cardInfo === "TIMEOUT") return false;

        if(cardInfo.data.bankCardInfo){
            this.account.states.logs.push({
                type: "info",
                message: `Chave pix associada: ${data.pixKey}`,
                date: new Date()
            })
            await this.save();
            return true
        }

        return false
    }

    //Solicitar um saque (amount inteiro ex: 100 = 100)
    //Retorna o valor restante
    async requestWithdraw(amount: number){
        const amountToWithdraw = Math.trunc(amount) * 100;
        await this.socket.requestAsync<scBankCardWithdrawMsg, csBankCardWithdrawMsg>("c2s_order_submit", {
            data: {
                money: amountToWithdraw,
                category: "PIX",
                Password: this.account.login.socket.password
            }
        });
        
        const totalAvailable = this.account.balance - amountToWithdraw;

        this.account.balance = totalAvailable;
        await this.save();
        
        return totalAvailable
    }

    //Obter depositos
    async getDeposits() {
        const response = await this.socket?.requestAsync<scChargeHistroy, csChargeHistroy>(
            "c2s_charge_record",
            {
                data: {
                    number: 500,
                    page: 1
                }
            }
        )

        return response === "TIMEOUT" ? [] : response.data.list;
    }

    //Obter saques
    async getWithdraws() {
        const response = await this.socket?.requestAsync<scBankWithdrawHistory, csBankWithdrawHistory>(
            "c2s_order_histroy",
            {
                data: {
                    number: 500,
                    page: 1
                }
            }
        )
        return response === "TIMEOUT" ? [] : response.data.history;
    }

    private async onPlayerLogin(session: scUserLoginHall) {
        this.socket.request("c2s_game_list_jackpot", {});
        this.socket.request("c2s_game_list", {});
        this.socket.request("c2s_server_cfg", {});
        this.socket.request("c2s_red_point", {});
        this.socket.request("c2s_lobby_marquee", {});
        this.socket.request("c2s_activity_list", {});
        this.socket.request("c2s_lobby_notice", {});

        const deposits = await this.getDeposits();
        const withdraws = await this.getWithdraws();

        this.account.login.socket.session = session.session;
        this.account.login.socket.sessionDate = new Date();
        this.account.balance = Number(session.money);
        this.account.vipLevel = Number(session.vipLevel);
        this.account.source = session.bBindSourceId.toString();

        this.account.deposits = deposits.map(deposit => ({
            transactionId: deposit.orderNo,
            amount: Number(deposit.coins),
            link: deposit.payUrl,
            gateway: deposit.name.toString(),
            gatewayId: deposit.typeId,
            date: new Date(deposit.orderTime),
            status: deposit.state
        }));

        this.account.withdraws = withdraws.map(withdraw => ({
            transactionId: withdraw.transNo,
            amount: Number(withdraw.coins),
            pix: withdraw.cardNo,
            description: withdraw.remark.toString(),
            status: withdraw.state,
            date: new Date(withdraw.timeStamp)
        }));

        this.account.uid = Number(session.uid);
        this.account.username = this.account.login.socket.account;

        await this.bindPixAccount({
            pixKey: "fafwafwfw@gmail.com",
            name: "Ana Lucia",
            document: "07770953430",
            pixKeyType: "EMAIL"
        })

        await this.save();

        this.session = session;
        this.status = "online";
    }

    //Sair da sessão
    async exit(){
        await this.save();
        this.socket.close();
        this.socket = null as any;
    }
}

export default Player;