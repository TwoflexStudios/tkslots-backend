import protobuf from 'protobufjs'
import { GameSocketResponse, Header, Packet } from '../../types/GameNetNode';
import { Client2ServerCommands, GetServerCommandByMainIdAndAssistantId } from '../../helpers/commands';
import fs from "fs";

class GameProtocolHelper {
    public protobuff: protobuf.Root = new protobuf.Root();
   
    getHeadlen = () => 20

    getHeartBeatCmd = () => ({ mainID: 1, aID: 1 })

    isFrameworkMsg = (cmd: any) => false

    header2Cmd(header: Header, addOne = false) {
        const base = `${header.bMainID}.${header.bAssistantID}`;
        return addOne ? `${header.bMainID}.${header.bAssistantID as any + "1"}` : `${base}0`;
    }

    /**
     * Carregar arquivos de protobuff
     */
    async loadFromFolder(folder: string){
        try{
            const protobaseFiles = await fs.readdirSync(folder, "utf-8");

            const path: string[] = [];

            protobaseFiles.map(item => path.push(folder + item))

            await this.protobuff.loadSync(path);
        }catch(ex){
            console.error(ex)
        }
    }

    /**
     * Codificar packet com protobuff
     * @param buffer 
     * @returns [CMD, PACKET] | undefined
    */
    encodePayload(action: keyof typeof Client2ServerCommands, packet: Packet): [string, Packet] | undefined {
        // console.log(`Codificando: ${JSON.stringify(packet)}, comando: ${action}`);

        if (!packet.header) return;
        const commandData = Client2ServerCommands[action];
        if (!commandData) return;

        const cmd = `${packet.header.bMainID}.${packet.header.bAssistantID}`;
        let data = packet.data || new Uint8Array(0);

        if (!packet.data) {
            packet.data = new Uint8Array(0);
            // console.warn('[PROTOBUF] ⚠️ Sem dados enviado. CMD: ' + cmd);
        } else if (packet.data && typeof packet.data === 'object' && !Buffer.isBuffer(data)) {
            try {
                const pbType = this.protobuff.lookupType(commandData.pak);
                // console.log(`[PROTOBUF] Usando o tipo ${pbType} para o comando ${action}`)

                const err = pbType.verify(data);
                if (err) throw new Error('Invalid protobuf data: ' + err);
                const message = pbType.create(data);
                packet.data = pbType.encode(message).finish();
            } catch (err) {
                // console.warn('[PROTOBUF] ⚠️ Sem dados ou tipo conhecido. Enviando vazio. CMD: ' + cmd);
                packet.data = new Uint8Array(0);
            }
        }


        const payload = Buffer.from(packet.data || null);
        const headerLen = this.getHeadlen();
        const totalLen = headerLen + payload.length;

        if (!packet.header) return null as any;

        const header = Buffer.alloc(headerLen);
        packet.header.uMessageSize = totalLen;
        header.writeInt32LE(totalLen, 0);
        header.writeInt32LE(packet.header.bMainID, 4);
        header.writeInt32LE(packet.header.bAssistantID, 8);
        header.writeInt32LE(packet.header.bHandleCode, 12);
        header.writeInt32LE(packet.header.inbReserve, 16);

        const full = Buffer.concat([header, payload], totalLen);
        packet.data = full;

        return [cmd, packet];
    }

    /**
     * Decodificar Protobuff
     * @param buffer 
     * @returns 
    */
    parseResponse<T = any>(buffer: Buffer): GameSocketResponse<T> {
        const head = {
            uMessageSize: buffer.readInt32LE(0),
            bMainID: buffer.readInt32LE(4),
            bAssistantID: buffer.readInt32LE(8),
            bHandleCode: buffer.readInt32LE(12),
            inbReserve: buffer.readInt32LE(16)
        };

        const command = GetServerCommandByMainIdAndAssistantId(head.bMainID, head.bAssistantID)

        const payload = buffer.slice(20);

        // Este é o cmd que será usado para procurar o callback
        const callbackCmdId = this.header2Cmd(head, false).toString();
        // Este é o cmd que será usado para buscar o tipo do pacote
        const decodeCmdId = this.header2Cmd(head, true).toString();

        let data: any = payload;

        if (command) {
            try {
                const pbType = this.protobuff.root.lookupType(command.pak);
                data = pbType.decode(payload);
                // console.log(`[PROTOBUF]: ${pbType.name} decodificando dados de ${command.name}`);
            } catch (err) {
                // console.warn('[PROTOBUF] ❌ Falha ao decodificar a resposta:', err.message);
                data = {};
            }
        } else {
            //console.log(`[PROTOBUF] 🔍 Nenhuma definição encontrada para ${decodeCmdId}, mantendo payload bruto.`);
        }

        return {
            header: head,
            data,
            cmd: `${head.bMainID}.${head.bAssistantID}`, // só para log
            cmdName: command?.name || "",
            callback: callbackCmdId,
            command: command as any
        };
    }
}

export default GameProtocolHelper;