import { format, formatDate } from "date-fns";
import logger from "../config/pino";
import { getProxyAgent } from "../helpers/proxy";
import AccountsModel, { AccountsSchema, AccountStatusEnum } from "../schemas/accounts";
import sitesModel, { SitesSchema } from "../schemas/sites";
import { ChannelEnum, GameSocketResponse } from "../types/GameNetNode";
import { csMailGetprop, lobbyMailListMsg, lobbyMailMsg, scMailGetprop } from "../types/protobuff/pb_lobby_mail";
import { csChargeHistroy, scChargeHistroy } from "../types/protobuff/pb_lobby_mall";
import { scGetBenefits } from "../types/protobuff/pb_lobby_roulette";
import { csBankCardBindMsg, csBankCardWithdrawMsg, csBankWithdrawHistory, scBankCardInfoMsg, scBankCardWithdrawMsg, scBankWithdrawHistory } from "../types/protobuff/pb_lobby_withdraw";
import { csUserLoginHall, csUserSessionLogin, scUserLoginHall } from "../types/protobuff/pb_user";
import ApiLogin from "./api/account/login";
import GameProtocolHelper from "./protocol/GameProtocolHelper";
import GameSocketBridge from "./protocol/GameSocketBridge";
import { EventEmitter } from "stream";
import { scSiginResult } from "../types/protobuff/pb_lobby_signin";

// ============================================================================
// Constants
// ============================================================================

const SESSION_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour in milliseconds
const PROTOBUFF_PATHS = {
    MAIN: "./src/protobuff/",
    GAMES: "./src/protobuff/games"
} as const;

// ============================================================================
// Types & Interfaces
// ============================================================================

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

type PlayerStatus = "offline" | "online" | "reconnecting";
type LogType = "info" | "warn" | "error" | "debug" | "success";

// ============================================================================
// Player Class
// ============================================================================

export enum PlayerEventEnum {
    CONNECTED = "player:connected",
    DISCONNECTED = "player:disconnected",
    CONNECTION_LOST = "player:connection-lost",
    HEARTBEAT = "player:heartbeat"
}

class Player extends EventEmitter {
    // ========================================================================
    // Properties
    // ========================================================================

    private readonly accountId: string;

    // Account & Site
    public account!: AccountsSchema;
    public site: SitesSchema | null = null;

    // Session & Status
    public session: scUserLoginHall | null = null;
    public status: PlayerStatus = "offline";
    public location: ChannelEnum = ChannelEnum.LOBBY;
    public reconnect: boolean = false;

    // Auto Logout
    public autoLogoutAt: Date | null = null;
    public readAndGetAllEmailBeforeExit: boolean = false;

    // Proxy
    public readonly proxySessionId: string = crypto.randomUUID();
    public readonly proxyAgent = getProxyAgent(this.proxySessionId);

    // Protocol & Socket
    public readonly protocolHelper: GameProtocolHelper = new GameProtocolHelper();
    public socket!: GameSocketBridge;

    public cacheAttributes: Record<string, any> = {};

    // ========================================================================
    // Constructor
    // ========================================================================

    constructor(accountId: string) {
        super();
        this.accountId = accountId;
    }

    // ========================================================================
    // Logging
    // ========================================================================

    public log(value: string, type: LogType = "info"): void {
        logger[type](`[${this.accountId}:${ChannelEnum[this.location]}]: ${value}`);
    }

    async connect(): Promise<ConnectionResult> {
        return new Promise(async (resolve) => {
            try {
                // Inicializar protocolos
                await this.initializeProtocols();

                // Carregar conta e site
                const loadResult = await this.loadAccountAndSite();
                if (!loadResult.success) {
                    return resolve({ status: false, message: loadResult.message });
                }

                // Verificar se precisa fazer login
                const needLogin = this.checkIfNeedsLogin();

                // Fazer login via API se necessário
                if (needLogin) {
                    const apiLoginResult = await this.performApiLogin();
                    if (!apiLoginResult.success) {
                        return resolve({ status: false, message: apiLoginResult.message });
                    }
                }

                // Criar conexão WebSocket
                this.createWebSocketConnection();

                // Configurar handlers de login
                const lastSession = this.account.login.socket.session;
                this.setupSocketHandlers(lastSession!, needLogin, resolve);

            } catch (error) {
                this.log(`Erro durante conexão: ${error}`, "error");
                resolve({ status: false, message: "Erro interno durante conexão" });
            }
        });
    }

    private async initializeProtocols(): Promise<void> {
        // this.log("Iniciando conexão", "info");
        await this.protocolHelper.loadFromFolder(PROTOBUFF_PATHS.MAIN);
        await this.protocolHelper.loadFromFolder(PROTOBUFF_PATHS.GAMES);
    }

    private async loadAccountAndSite(): Promise<{ success: boolean; message: string }> {
        this.account = await AccountsModel.findOne({ _id: this.accountId }) as any;

        if (!this.account) {
            this.log(`Conta ${this.accountId} não encontrada`, "error");
            return { success: false, message: "Conta não encontrada" };
        }

        this.site = await sitesModel.findOne({ _id: this.account.siteId });

        if (!this.site) {
            this.log(`Site ${this.account.siteId} não encontrado`, "error");
            return { success: false, message: "Site não encontrado" };
        }

        return { success: true, message: "OK" };
    }

    private checkIfNeedsLogin(): boolean {
        const currentDate = new Date();
        const lastSession = this.account.login.socket.session;
        const lastSessionDate = this.account.login.socket.sessionDate;

        const isExpired = lastSessionDate &&
            lastSessionDate.getTime() + SESSION_EXPIRATION_TIME < currentDate.getTime();

        const needLogin = isExpired || !lastSession;

        this.log(
            `Verificando sessão, última sessão: ${lastSession}, ` +
            `última sessão data: ${lastSessionDate ? format(lastSessionDate, "dd/MM/yyyy HH:mm:ss") : "N/A"}`,
            "info"
        );

        return needLogin;
    }

    private async performApiLogin(): Promise<{ success: boolean; message: string }> {
        this.log("Necessário fazer login", "info");

        const loginResult = await ApiLogin(this.account, false, this.proxyAgent);
        // this.log(`Login result: ${JSON.stringify(loginResult)}`, "info");

        if (!loginResult.status) {
            this.log(`Erro ao fazer login: ${loginResult.message}`, "error");
            return { success: false, message: loginResult.message };
        }

        this.account.login.socket.account = loginResult.account;
        this.account.login.socket.password = loginResult.password;

        return { success: true, message: "OK" };
    }

    private createWebSocketConnection(): void {
        // this.log("Criando conexão com o WS");

        this.socket = new GameSocketBridge(
            this.site!.connection.tcp.host,
            this.protocolHelper,
            {
                channel: ChannelEnum.LOBBY,
                heartBeat: true,
                proxyAgent: this.proxyAgent
            }
        );

        this.socket.onHeartbeat = this.heartbeat.bind(this);
        this.socket.onServerMessage = this.onServerMessage.bind(this);
        this.socket.onClose = () => {
            this.emit(PlayerEventEnum.CONNECTION_LOST, { state: this.account });
            if (this.reconnect) {
                this.connect();
            }
        };
    }

    private setupSocketHandlers(
        lastSession: string,
        needLogin: boolean,
        resolve: (value: ConnectionResult) => void
    ): void {
        this.socket.onReady = async () => {
            if (!this.account || !this.socket) return;

            if (lastSession && !needLogin) {
                this.log("Verificando sessão", "info");
                await this.loginWithSession(lastSession, resolve);
            } else {
                this.log("Fazendo login", "info");
                await this.loginWithAccount(resolve);
            }
        };

        this.socket.init();
    }

    private async loginWithSession(
        lastSession: string,
        resolve: (value: ConnectionResult) => void
    ): Promise<void> {
        if(!this.socket) throw new Error("Socket não encontrado");
        
        this.socket.request<scUserLoginHall, csUserSessionLogin>("c2s_session_verify", {
            data: {
                deviceCode: this.account.login.device.id,
                session: lastSession as any,
                uid: this.account.uid as any
            }
        }, async ({ data }) => {
            this.log("Logando com a sessão salva", "info");

            if (!data.session) {
                this.log("Falha ao logar com a sessão, entrando com usuario e senha", "error");
                this.account.login.socket.session = "";
                this.account.login.socket.sessionDate = null as any;
                await this.save();
                resolve(await this.connect());
                return;
            }

            await this.onPlayerLogin(data);
            resolve({
                status: true,
                message: "Conectado",
                data
            });
        });
    }

    private async loginWithAccount(resolve: (value: ConnectionResult) => void): Promise<void> {
        this.socket.request<scUserLoginHall, csUserLoginHall>("c2s_lobby_login", {
            data: {
                ab: 100,
                account: this.account.login.socket.account,
                password: this.account.login.socket.password,
                deviceCode: this.account.login.device.id,
                deviceType: this.account.login.device.platform
            }
        }, async ({ data }) => {
            this.log("Logando com a conta", "info");

            if (!data.session) {
                await this.handleBannedAccount();
                resolve({
                    status: false,
                    message: "Conta banida"
                });
                return;
            }

            await this.onPlayerLogin(data);
            resolve({
                status: true,
                message: "Conectado",
                data
            });
        });
    }

    private async handleBannedAccount(): Promise<void> {
        this.account.status = AccountStatusEnum.BANNED;
        this.account.states.logs.push({
            type: "error",
            message: "Falha ao logar com a conta, conta banida",
            date: new Date()
        });
        await this.save();
        this.emit(PlayerEventEnum.DISCONNECTED, { state: this.account });
    }

    // ========================================================================
    // Event Handlers
    // ========================================================================

    async onClose(): Promise<void> {
        this.status = "offline";
        await this.exit();
    }

    onServerMessage(command: string | null, decoded: GameSocketResponse): void {
        // Override this method in subclasses if needed
    }

    async heartbeat(): Promise<void> {
        if (!this.autoLogoutAt) return;

        const [hour, minute] = formatDate(this.autoLogoutAt, "HH:mm").split(":");
        const endDate = new Date();
        const currentDate = new Date();

        endDate.setHours(Number(hour));
        endDate.setMinutes(Number(minute));

        if (endDate.getTime() < currentDate.getTime()) {
            this.log("Logout automático");
            await this.exit();
        }
    }

    // ========================================================================
    // Account Management
    // ========================================================================

    async save(): Promise<void> {
        if (!this.account) return;

        const stack = new Error().stack;
        const caller = stack?.split('\n')[2]?.trim() || 'unknown';
        this.log(`💾 SAVE chamado de: ${caller}`, "warn");

        await AccountsModel.updateOne({ _id: this.accountId }, this.account);
    }

    async setAutoLogoutAt(date: Date): Promise<void> {
        this.log(`Setando logout automático para ${format(date, "HH:mm")}`);
        this.autoLogoutAt = date;
    }

    async exit(): Promise<void> {
        if (this.readAndGetAllEmailBeforeExit) {
            try {
                await this.readEmails();
            } catch (error) {
                this.log(`Erro ao ler emails antes de sair: ${error}`, "error");
            }
        }

        this.socket?.close();
        this.socket = null as any;
        this.emit(PlayerEventEnum.DISCONNECTED, { state: this.account });
    }

    // ========================================================================
    // Daily Actions
    // ========================================================================

    async dailyCheckin(): Promise<void> {
        const response = await this.socket.requestAsync<scSiginResult, any>("c2s_signin_signin", {});

        if (response === "TIMEOUT") {
            return;
        }

        this.account.lastCheckin = new Date();
        this.account.balance = response.data.curUserScore || this.account.balance;
    }

    // ========================================================================
    // PIX & Withdraw Operations
    // ========================================================================

    /**
     * Associa uma conta PIX ao jogador
     * @param data Dados da conta PIX (chave, tipo, nome, documento)
     * @returns true se associado com sucesso, false caso contrário
     */
    async bindPixAccount(data: IPixBindAccount): Promise<boolean> {
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
        });

        if (response === "TIMEOUT") return false;

        const cardInfo = await this.socket.requestAsync<scBankCardInfoMsg, any>("c2s_card_bind_info", {});
        if (cardInfo === "TIMEOUT") return false;

        if (cardInfo.data.bankCardInfo) {
            this.account.states.logs.push({
                type: "info",
                message: `Chave pix associada: ${data.pixKey}`,
                date: new Date()
            });
            return true;
        }

        return false;
    }

    /**
     * Solicita um saque
     * @param amount Valor inteiro a sacar (ex: 100 = R$ 100)
     * @returns Saldo restante após o saque
     */
    async requestWithdraw(amount: number): Promise<number> {
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

        return totalAvailable;
    }

    // ========================================================================
    // Transaction History
    // ========================================================================

    /**
     * Obtém histórico de depósitos dos últimos 30 dias
     * @returns Lista de depósitos ou array vazio em caso de timeout
     */
    async getDeposits(): Promise<any[]> {
        const response = await this.socket?.requestAsync<scChargeHistroy, csChargeHistroy>(
            "c2s_charge_record",
            {
                data: {
                    number: 500,
                    page: 1,
                    day: 30
                }
            }
        );

        return response === "TIMEOUT" ? [] : response.data.list;
    }

    /**
     * Obtém histórico de saques dos últimos 30 dias
     * @returns Lista de saques ou array vazio em caso de timeout
     */
    async getWithdraws(): Promise<any[]> {
        const response = await this.socket?.requestAsync<scBankWithdrawHistory, csBankWithdrawHistory>(
            "c2s_order_histroy",
            {
                data: {
                    number: 500,
                    page: 1,
                    day: 30
                }
            }
        );

        return response === "TIMEOUT" ? [] : response.data.history;
    }

    // ========================================================================
    // Email & Rewards
    // ========================================================================

    /**
     * Obtém lista de emails
     * @returns Lista de emails ou array vazio em caso de timeout
     */
    async getEmails(): Promise<lobbyMailMsg[]> {
        const response = await this.socket.requestAsync<lobbyMailListMsg, any>("c2s_mail_list", {});
        return response === "TIMEOUT" ? [] : response.data.mailList;
    }

    /**
     * Abre um email específico e coleta recompensas
     * @param mailId ID do email
     * @returns Dados do email ou null em caso de timeout
     */
    async openEmail(mailId: number): Promise<any> {
        const response = await this.socket.requestAsync<scMailGetprop, csMailGetprop>("c2s_mail_get", {
            data: {
                mailid: mailId
            }
        });

        if (response === "TIMEOUT") return null;

        this.account.balance = Array.isArray(response.data.curUserScore)
            ? response.data.curUserScore[0]
            : response.data.curUserScore as any;

        return response.data;
    }

    /**
     * Lê e coleta recompensas de todos os emails
     */
    async readEmails(): Promise<void> {
        const emails = await this.getEmails();
        for (const email of emails) {
            await this.openEmail(email.mailid);
        }
    }

    /**
     * Coleta bônus da roleta
     * @returns true se coletado com sucesso
     */
    async getWheelBonus(): Promise<boolean> {
        await this.socket.requestAsync<scGetBenefits, any>("c2s_benefits_get", {});
        return true;
    }

    // ========================================================================
    // Login & Session Management
    // ========================================================================

    private async onPlayerLogin(session: scUserLoginHall): Promise<void> {
        try {
            if (!this.socket) return;
            this.socket.request("c2s_game_list_jackpot", {});
            this.socket.request("c2s_game_list", {});
            this.socket.request("c2s_server_cfg", {});
            this.socket.request("c2s_red_point", {});
            this.socket.request("c2s_lobby_marquee", {});
            this.socket.request("c2s_activity_list", {});
            this.socket.request("c2s_lobby_notice", {});

            const deposits = await this.getDeposits();
            const withdraws = await this.getWithdraws();
            await this.readEmails();

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

            await this.save();

            this.session = session;
            this.status = "online";
            this.emit(PlayerEventEnum.CONNECTED, { state: this.account, session });
        } catch (ex) {
            this.log(`Erro ao logar: ${ex}`, "error");
            this.exit();
        }
    }
}

export default Player;