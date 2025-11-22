import WebSocket from "ws";
import GameProtocolHelper from "./GameProtocolHelper";
import sitesModel, { SitesSchema } from "../../schemas/sites";
import crypto from "crypto";
import logger from "../../config/pino";
import { ChannelEnum, GameSocketResponse, Packet, RequestQeue } from "../../types/GameNetNode";
import { Client2ServerCommands } from "../../helpers/commands";
import GameSocketEventEmitter from "./GameSocketEventEmitter";

interface SocketBridgeOptions {
    heartBeat?: boolean;
    proxyAgent?: any;
    channel?: ChannelEnum;
    disableTimeout?: boolean;
}

const channels = {
    [ChannelEnum.GAME]: "GAME",
    [ChannelEnum.LOBBY]: "LOBBY"
}

class GameSocketBridge extends GameSocketEventEmitter {
    protected socket: WebSocket | null = null;
    private url: string;
    public protocolHelper: GameProtocolHelper;
    private options: SocketBridgeOptions;
    public connected: boolean = false;

    //Callback Queue
    private _requests: RequestQeue[] = [];

    //Extraido dos fragmentos do site
    private safeCode: number = 0; // SafeCode começa com zero até ser calculado pelo WS
    private localKey = 0x134b04e; //Isso é fixo para todos, mas é bom ser flexível

    //============= CONFIG
    private heartTime: number = 5000; // Tempo de envio de HeartBeat (Manter conexão ativa)
    private timeoutTime: number = 120000; // Timeout de recebimento de mensagem

    //============= STATIC
    private _keepAliveTimer: any = null;
    private _receiveMsgTimer: any = null;

    constructor(url: string, protocolHelper: GameProtocolHelper, options: SocketBridgeOptions = {
        heartBeat: true,
        proxyAgent: null,
        channel: ChannelEnum.LOBBY,
        disableTimeout: false
    }) {
        super();
        this.url = url;
        this.protocolHelper = protocolHelper;
        this.options = options;
    }

    //@Override este método é chamado quando a conexão estiver pronta
    onReady(){}
    //@Override este método é chamado quando o timeout for atingido
    onTimeout(){}
    //@Override este método é chamado quando o heartbeat for enviado
    onHeartbeat(){}
    //@Override este método é chamado quando a conexão estiver fechada
    onClose(){}
    //@Override este método é chamado quando houver um erro na conexão
    onError(){}
    //@Override este método é chamado quando tiver uma mensagem
    onServerMessage(command: string | null, decoded: GameSocketResponse){}

    async init() {
        this.socket = new WebSocket(this.url, { agent: this.options.proxyAgent });

        this.socket.on("open", () => {
            this.connectVerify();
        });

        this.socket.on('message', (data: any) => {
            this.onMessage(data);
        });

        this.socket.on('close', (code) => {
            this.log(`Socket fechado, motivo: ${code}`)
            this.connected = false;
            this.onClose();
            clearInterval(this._keepAliveTimer);
            clearTimeout(this._receiveMsgTimer);
        });

        this.socket.on('error', (err) => {
            this.log(`Socket erro: ${err}`)
            this.onError();
        });
    }

    close() {
        if (this.socket) {
            clearInterval(this._keepAliveTimer);
            clearTimeout(this._receiveMsgTimer);
            this.socket.close();
        }
    }

    //Enviar um packet (Pacote do jogo) via socket
    request<R = any, D = any>(
        action: keyof typeof Client2ServerCommands,
        packet: Packet<D>,
        callback?: (data: GameSocketResponse<R>) => void,
        track: boolean = true,
        urgent: boolean = false
    ) {
        const actionData = Client2ServerCommands[action];

        packet.channelid = packet.channelid !== undefined ? packet.channelid : this.options.channel as any;
        
        packet.header = {
            bHandleCode: 0,
            inbReserve: Math.floor(this.safeCode),
            bMainID: Number(actionData.mainID),
            bAssistantID: Number(actionData.aID),
            uMessageSize: 20
        }
       
        // Monta o pacote binário com cabeçalho + protobuf
        this.protocolHelper.encodePayload(action, packet);
        const encoded = this.encodeReqBuffer(packet.data as any || null);

        const cmd = `${packet.header.bMainID}.${packet.header.bAssistantID}`;
        this.log(`[Send]: ${actionData.name} [${cmd}]`);
        
        //Enviar o pacote
        this.send(encoded);

        if (track && callback) {
            const cmd = `${packet.header.bMainID}.${packet.header.bAssistantID}`;
            this._requests.push({
                cmd,
                cmdName: actionData.name.split("c2s").join("s2c"),
                callback,
                urgent,
                buffer: Buffer.from(packet.data  as any),
                rspCmd: cmd,
                rspObject: callback as any
            });
        }
    }

    async requestAsync<R = any, P = any>(
        action: keyof typeof Client2ServerCommands,
        packet: Packet<P>,
        timeout = 10000
    ): Promise<GameSocketResponse<R> | "TIMEOUT"> {
        return new Promise(resolve => {
            this.request(action, packet, (res) => {
                resolve(res as any)
            });

            setTimeout(() => {
                resolve("TIMEOUT")
            }, timeout);
        })
    }

    private log(value: string, type: "info" | "warn" | "error" | "debug" | "success" = "info"){
        // logger[type](`[${channels[this.options.channel || ChannelEnum.LOBBY]}:GAMESOCKET]: ${value}`)
    }

    private hasVerify() {
        return this.safeCode > 0;
    }

    //Codificar buffer com safeCode
    private encodeReqBuffer(buffer: Buffer) {
        if (this.hasVerify()) {
            const encoded = Buffer.alloc(buffer.length);
            for (let i = 0; i < buffer.length; i++) {
                //@ts-ignore
                encoded[i] = buffer[i] ^ this.safeCode;
            }
            return encoded;
        }
        return buffer;
    }

    //Decodificar buffer com safeCode
    private decodeRespBuffer(buffer: Buffer) {
        if (this.hasVerify()) {
            const decoded = Buffer.alloc(buffer.length);
            for (let i = 0; i < buffer.length; i++) {
                //@ts-ignore
                decoded[i] = buffer[i] ^ 0; // Isso ta usando o zero, no código original ele usa o safeCode, mas não funciona aqui (Só na teoria?)
            }
            return decoded;
        }
        return buffer;
    }

    private buildAuthBuffer() {
        const ts = Math.floor(Date.now() / 1000);
        const md5Hex = crypto.createHash('md5').update(`${ts}${this.localKey}:<>:`).digest('hex');
        const md5Bin = Buffer.from(md5Hex, 'hex'); // 16 bytes, MD5 é 128 bits

        const buffer = Buffer.alloc(42);
        let offset = 0;

        // Cuidado: MD5 retorna 16 bytes binários, o jogo pode estar convertendo o hex como string!
        if (md5Bin.length !== 16) {
            throw new Error("MD5 should be 16 bytes");
        }

        // se necessário (como Cocos faz), codifique como string (hex chars) e grave os caracteres diretamente
        const md5Str = md5Hex.slice(0, 32); // 32 caracteres (ASCII)
        buffer.write(md5Str, offset, 'ascii'); // grava como string de texto
        offset += 32;

        buffer.writeInt16LE(0, offset); offset += 2;
        buffer.writeBigInt64LE(BigInt(ts), offset);
        return buffer;
    }

    //Quando o socket for aceito pelo servidor
    private onSocketVerified(){
        this.connected = true;
        this.emit('connectVerified');
        this.resetHeartbeatTimer();
        this.onReady();
    }

    //Função para enviar uma solicitação de verificação de conexão comando: connectVerify
    private connectVerify() {
        const authData = this.buildAuthBuffer();

        const header = {
            bMainID: 1,
            bAssistantID: 3,
            bHandleCode: 0,
            inbReserve: this.safeCode
        };

        const packet = {
            data: authData,
            isCompress: false,
            channelid: 0,
            action: header.bMainID.toString(),
            method: header.bAssistantID.toString(),
            header
        };

        this.log(`🔒 Socket Verified Payload Len: ${authData.length}`, "info")

        // Monta e envia, mas não registra em _requests
        this.protocolHelper.encodePayload("connectVerify", packet);

        const encoded = this.encodeReqBuffer(packet.data);
        this.send(encoded);
    }

    //Função para calcular o safeCode baseado na resposta do servidor na solicitação de connectVerify
    private onSocketVerify(resp: GameSocketResponse) {
        const offset = 4
        if (resp.header.bHandleCode === 0) {
            let data = resp.data;

            // Garante que seja Buffer
            if (!(data instanceof Buffer)) {
                try {
                    data = Buffer.from(data); // tenta converter de Uint8Array ou Array
                } catch (e) {
                    // this.log(`Não foi possível converter resp.data em Buffer`)
                    return false;
                }
            }

            if (data.length >= 8) {
                const rawCode = data.readUInt32LE(offset); // OFFSET 4
                const safe = (rawCode - this.localKey) / 23;
                this.safeCode = safe;
                this.log(`✅ Verificado, safeCode: ${this.safeCode}`, "success")
                return true;
            } else {
                this.log('[Auth] Dados insuficientes para ler safeCode', "warn");
            }
        } else {
            this.log(`bHandleCode !== 0, verificação rejeitada`, "warn")
        }
        return false;
    }

    //Função para processar a resposta do servidor
    private onMessage(raw: Buffer) {
        this.resetReceiveMsgTimer(); // Reseta o relogio de timeout

        const decoded = this.decodeRespBuffer(raw);
        const response = this.protocolHelper.parseResponse(decoded);

        if (response.cmd === "1.3") {
           const verified = this.onSocketVerify(response);
            if (verified) {
                this.onSocketVerified();
            } else {
                this.log(`Falha na verificação`, "error")
            }
            return;
        }

        this.log(`RECV: ${response.cmdName}, ${response.data}`, "debug")

        const match = this._requests.find(r => r.cmd === response.cmd || r.cmdName === response?.command?.name);
        
        if (match && match.callback) {
            this.log(`[Callback] Disparando callback para ${response.cmd}`);
            this.log(`Disparando callback para: ${response.cmd} | ${response?.command?.name || "Protobuff desconhecido"}`)
            match.callback(response);
            this._requests = this._requests.filter(r => r !== match);
        }

        if(response.command){
            // console.log(response.command.name, response, "Comando recebido")
            this.emit(String(response.command.name), response)
        }
        this.emit('message', response);
        this.onServerMessage(String(response.command.name), response);
    }

    //Função para enviar buffer via socket
    private send(data: Buffer) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(data);
        } else {
            this.log(`Não foi possível enviar, socket não está conectado`, "error")
        }
    }

    // ---------------------------------------
    // Heartbeat
    // ---------------------------------------
    private resetHeartbeatTimer() {
        if (this._keepAliveTimer) clearInterval(this._keepAliveTimer);
        if (this.options.heartBeat) {
            this._keepAliveTimer = setInterval(() => this.sendHeart(), this.heartTime);
        }
    }

    private resetReceiveMsgTimer(time = this.timeoutTime) {
        if (this.options.disableTimeout) return;
        if (this._receiveMsgTimer) clearTimeout(this._receiveMsgTimer);
        this._receiveMsgTimer = setTimeout(() => {
            //Se não receber mensagem em 2 minutos, fecha o socket
            this.log(`Timeout recebendo mensagem`, "error");
            this.socket?.close();
            this.onTimeout();
        }, time);
    }

    private sendHeart() {
        if (!this.options.heartBeat || !this.connected) return;
        this.log(`💞 Heartbeat`, "debug")
        const hb = this.protocolHelper.getHeartBeatCmd(); // { mainID, aID }
        const header = {
            bMainID: hb.mainID,
            bAssistantID: hb.aID,
            bHandleCode: 0,
            inbReserve: this.safeCode
        };

        const packet = {
            action: header.bMainID.toString(),
            method: header.bAssistantID.toString(),
            isCompress: false,
            channelid: this.options.channel,
            data: new Uint8Array(0),
            header
        };

        this.protocolHelper.encodePayload(
            "c2s_heart",
            {
                channelid: this.options.channel || ChannelEnum.LOBBY,
                data: new Uint8Array(0),
                header
            }
        );

        //@ts-expect-error TS Espera que packet.data seja Buffer o Unit array ta confundido, ignore.
        const encoded = this.encodeReqBuffer(packet.data);
        this.send(encoded);
        this.onHeartbeat();
    }
}

export default GameSocketBridge;