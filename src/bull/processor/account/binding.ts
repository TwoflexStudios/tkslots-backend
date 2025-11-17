import logger from "../../../config/pino";
import AccountsModel, { AccountStateEnum } from "../../../schemas/accounts";
import sitesModel from "../../../schemas/sites";
import BowerModule from "../../../services/code/Bower";
import { CodeEventsEnum } from "../../../globals/enums/CodeEventsEnum";
import BindPhone from "../../../bridge/api/account/bindPhone";
import { getRandomPhoneNumber } from "../../../helpers/simulation";
import { Job } from "bullmq";
import { getTKConfig } from "../../../config/getConfig";
import { SmsProviderEnum } from "../../../schemas/config";
import SMSActivateModule from "../../../services/code/Activate";
import RequestCode from "../../../bridge/api/account/requestCode";

interface JobData {
    accountId: string;
}

const BindPhoneNumberJob = async (job: Job<JobData>) => {
    await job.updateProgress("Preparando");
    const { accountId } = job.data;
    const account = await AccountsModel.findOne({ _id: accountId });
    if (!account) throw new Error("Conta não encontrada");

    logger.info(`[BIND QUEUE]: Bindando telefone para conta ${account._id}`);
    account.state = AccountStateEnum.BINDING;
    await account.save();

    const siteInfo = await sitesModel.findOne({ _id: account.siteId });

    if (account.states.retries.bind >= 3 || job.attemptsMade >= 3) {
        await account.updateOne({ state: AccountStateEnum.BIND_FAILED, stateReason: "Muitas tentativas de vincular telefone" });
        throw new Error("Muitas tentativas de vincular telefone");
    }

    await job.updateProgress("Verificando conta");

    if (account.login.phoneNumber) {
        account.state = AccountStateEnum.READY;
        account.states.logs.push({
            type: "bind",
            message: `Conta ${account._id} já possui número vinculado`,
            date: new Date()
        })
        await account.save();
        await job.updateProgress("Finalizando");
        return {
            status: true,
            message: `Conta ${account._id} já possui número vinculado`
        }
    }

    if (siteInfo?.serverInfo.RegNeedCode) {
        const config = await getTKConfig();

        const smsModule = config.sms.provider === SmsProviderEnum.ACTIVATE ? new SMSActivateModule() : new BowerModule();
        await job.updateProgress("Aguardando número");

        //@ts-ignore
        config.sms.payload.price.from = Number(config.sms.payload.price.from);
        //@ts-ignore
        config.sms.payload.price.max = Number(config.sms.payload.price.max);
        //@ts-ignore
        const number = await smsModule.getPhoneNumber(config.sms.payload);

        if (!number.status) {
            account.states.logs.push({
                type: "bind",
                message: `Erro ao obter número: ${number.message}`,
                date: new Date()
            })
            account.states.retries.bind += 1;
            await account.save();
            throw new Error(`Erro ao obter número: ${number.message}`);
        }

        await job.updateProgress("Solicitando código");

        account.states.logs.push({
            type: "bind",
            message: `Solicitando código: ${number.data.phoneNumber}`,
            date: new Date()
        })

        await account.save();

        await job.updateProgress("Aguardando código");

        logger.info(`[BIND QUEUE]: Aguardando código: ${number.data.phoneNumber}`)

        const { phoneNumber } = number.data;

        await RequestCode(accountId, phoneNumber);

        await new Promise((resolve, reject) => {
            //On code received
            smsModule.on(CodeEventsEnum.CODE_RECEIVED, async (data) => {
                const { code } = data;
                await job.updateProgress("Vinculando número");
                const bind = await BindPhone(account, { phoneNumber, code });
                logger.info(`[BIND QUEUE]: Código recebido: ${code}`)

                if (bind.status) {
                    account.state = AccountStateEnum.READY;
                    account.states.logs.push({
                        type: "bind",
                        message: `Número vinculado: ${phoneNumber}, código: ${code}`,
                        date: new Date()
                    })
                    await job.updateProgress("Finalizando");
                    await account.save();
                    resolve(bind);
                } else {
                    account.states.retries.bind += 1;
                    account.states.logs.push({
                        type: "bind",
                        message: `Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`,
                        date: new Date()
                    })
                    await job.updateProgress(`Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`);
                    await account.save();
                    reject(`Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`);
                }
            })

            //On code timeout
            smsModule.on(CodeEventsEnum.CODE_TIMEOUT, async () => {
                account.states.logs.push({
                    type: "bind",
                    message: `Código não recebido: ${phoneNumber} cancelado`,
                    date: new Date()
                })
                account.states.retries.bind += 1;
                await account.save();
                await job.updateProgress(`Código não recebido: ${phoneNumber} cancelado`);
                smsModule.cancelPhoneNumber(number.data.activationId);
                reject(`Código não recebido: ${phoneNumber} cancelado`);
            })

            smsModule.on(CodeEventsEnum.HALF_TIME, async () => {
                //Request new code
                job.updateProgress("Solicitando novo código");
                await RequestCode(accountId, phoneNumber);
            })

            smsModule.createListener(number.data.activationId);
        })
    } else {
        const phoneNumber = getRandomPhoneNumber();
        await job.updateProgress("Vinculando número");
        const bind = await BindPhone(account, { phoneNumber: phoneNumber });

        if (bind.status) {
            account.state = AccountStateEnum.READY;
            account.states.logs.push({
                type: "bind",
                message: `Número vinculado: ${phoneNumber}`,
                date: new Date()
            })
            await account.save();
            await job.updateProgress("Finalizando");
            return bind;
        } else {
            account.states.retries.bind += 1;
            account.states.logs.push({
                type: "bind",
                message: `Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`,
                date: new Date()
            })
            await account.save();
            throw new Error(`Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`);
        }
    }

}

export default BindPhoneNumberJob;