import { GetQueueState } from ".";
import logger from "../config/pino";
import AccountsModel, { AccountsSchema, AccountStateEnum } from "../schemas/accounts";
import { QueueEnum, QueueStateEnum } from ".";
import { Document, Types } from "mongoose";
import sitesModel from "../schemas/sites";
import BowerModule from "../services/code/Bower";
import { CodeEventsEnum } from "../globals/enums/CodeEventsEnum";
import BindPhone from "../bridge/api/account/bindPhone";
import { getRandomPhoneNumber } from "../helpers/simulation";

const BindPhoneNumber = async (_accountId: string | Types.ObjectId) => {
    const account = await AccountsModel.findOne({ _id: _accountId });
    if(!account) return;
    logger.info(`[BIND QUEUE]: Bindando telefone para conta ${account._id}`);
    account.state = AccountStateEnum.BINDING;
    await account.save();

    const siteInfo = await sitesModel.findOne({ _id: account.siteId });

    if(account.states.retries.bind >= 3){
        await account.updateOne({ state: AccountStateEnum.BIND_FAILED, stateReason: "Muitas tentativas de vincular telefone" });
        return;
    }

    if(siteInfo?.serverInfo.RegNeedCode){
        const bower = new BowerModule();

        const number = await bower.getPhoneNumber({
            retry: 3,
            service: "fx",
            country: "73",
            price: {
                providerId: 3089
            }
        })
        if(!number.status){
            account.states.logs.push({
                type: "bind",
                message: `Erro ao obter número: ${number.message}`,
                date: new Date()
            })
            account.states.retries.bind += 1;
            account.state = AccountStateEnum.PENDING;
            await account.save();
            return;
        }

        account.states.logs.push({
            type: "bind",
            message: `Solicitando código: ${number.data.phoneNumber}`,
            date: new Date()
        })

        await account.save();
        bower.createListener(number.data.activationId);

        logger.inf(`Aguardando código: ${number.data.phoneNumber}`)

        const { phoneNumber } = number.data;

        //On code received
        bower.on(CodeEventsEnum.CODE_RECEIVED, async (data) => {
            const { code } = data;
            const bind = await BindPhone(account, {phoneNumber, code});

            if(bind.status){
                account.state = AccountStateEnum.READY;
                account.states.logs.push({
                    type: "bind",
                    message: `Número vinculado: ${phoneNumber}, código: ${code}`,
                    date: new Date()
                })
                await account.save();
            }else{
                account.states.retries.bind += 1;
                account.states.logs.push({
                    type: "bind",
                    message: `Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`,
                    date: new Date()
                })
                account.state = AccountStateEnum.PENDING;
                await account.save();
            }
        })

        //On code timeout
        bower.on(CodeEventsEnum.CODE_TIMEOUT, async () => {
            account.states.logs.push({
                type: "bind",
                message: `Código não recebido: ${phoneNumber} cancelado`,
                date: new Date()
            })
            account.states.retries.bind += 1;
            account.state = AccountStateEnum.PENDING;
            await account.save();
        })

        return;
    }else{
        const phoneNumber = getRandomPhoneNumber();
        const bind = await BindPhone(account, {phoneNumber: phoneNumber});

        if(bind.status){
            account.state = AccountStateEnum.READY;
            account.states.logs.push({
                type: "bind",
                message: `Número vinculado: ${phoneNumber}`,
                date: new Date()
            })
            await account.save();
        }else{
            account.states.retries.bind += 1;
            account.states.logs.push({
                type: "bind",
                message: `Erro ao vincular número: ${phoneNumber}, motivo: ${bind.message}`,
                date: new Date()
            })
            account.state = AccountStateEnum.PENDING;
            await account.save();
        }
    }
    
}

/**
 * Esta queue serve para pegar contas pendentes
 * e atribuir um número de telefone caso necessario
 * baseado no atributo needPhone
 */
const BindingQueue = async () => {
    //Queue is idle
    if (GetQueueState(QueueEnum.BINDING).state === QueueStateEnum.IDLE) return;
    
    logger.info(`[BIND QUEUE]: Verificando contas`)

    //Update all accounts without needPhone
    await AccountsModel.updateMany({ needPhone: false }, { state: AccountStateEnum.READY });

    //Get accounts with needPhone
    const pendingBinding = await AccountsModel.find({ needPhone: true, state: AccountStateEnum.PENDING });

    const totalPending = pendingBinding.length;

    if (totalPending > 0) {
        pendingBinding.map(item => BindPhoneNumber(item._id));
    }
}

export default BindingQueue;