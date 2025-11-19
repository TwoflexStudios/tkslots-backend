import { type Request, type Response } from "express";
import AccountsModel, { AccountLoginTypeEnum, AccountStatusEnum, PlatformEnum } from "../../schemas/accounts";
import { SendResponse } from "../../helpers/res";
import { CreateAccount } from "../../bridge/api/account";
import { getRandomDeviceId } from "../../bridge/api/server";
import mongoose from "mongoose";

interface ListAccountsFilters {
    siteId?: string;
    status?: AccountStatusEnum[];
    page?: string;
    limit?: string;
}

class AccountsController {
    static listAccounts() {
        return async (req: Request, res: Response) => {
            try {
                const { siteId, status, page = "1", limit = "20" } = req.query as ListAccountsFilters;

                const numericPage = Math.max(parseInt(page), 1);
                const numericLimit = Math.max(parseInt(limit), 1);

                const filters: Record<string, any> = {};
                if (siteId) filters.siteId = siteId;
                filters.status = { $in: status || [AccountStatusEnum.READY] };

                const skip = (numericPage - 1) * numericLimit;

                const [data, total] = await Promise.all([
                    AccountsModel.find(filters)
                        .populate("siteId")
                        .sort({ _id: -1 })
                        .skip(skip)
                        .limit(numericLimit),
                    AccountsModel.countDocuments(filters),
                ]);

                return SendResponse(res, {
                    status: true,
                    data,
                    pagination: {
                        page: numericPage,
                        perPage: numericLimit,
                        totalItems: total,
                        totalPages: Math.ceil(total / numericLimit)
                    }
                });

            } catch (error: any) {
                return SendResponse(res, {
                    status: false,
                    message: "Erro ao listar contas"
                });
            }
        };
    }

    static createTestAccount() {
        return async (req: Request, res: Response) => {
            const [deviceId, hash, gpsId] = getRandomDeviceId(PlatformEnum.ANDROID);
            const account = await CreateAccount("69193ce63d60ea0db64e4e2d", {
                mode: AccountLoginTypeEnum.GUEST,
                needPhone: true,
                device: {
                    id: deviceId,
                    gpsId: gpsId,
                    hash: hash,
                    platform: PlatformEnum.ANDROID
                }
            })
            res.status(200).json({status: "Ok", account})
        }
    }

    static setStatus(){
        return async (req: Request, res: Response) => {
            const {accountId} = req.params;
            const {status} = req.body;

            const accountData = await AccountsModel.findOne({_id: accountId});

            if(!accountData){
                return SendResponse(res, {
                    status: false,
                    message: "Conta não encontrada"
                })
            }

            if(accountData.status === AccountStatusEnum.BUSY){
                return SendResponse(res, {
                    status: false,
                    message: "A conta esta ocupada"
                })
            }

            if(status === AccountStatusEnum.IN_PROGRESS){
                if(accountData.userId && accountData.userId.toString() !== req.userAuthenticated.id){
                    return SendResponse(res, {
                        status: false,
                        message: "A conta esta sendo usada por outro agente"
                    })
                }
                accountData.userId = new mongoose.Types.ObjectId(req.userAuthenticated.id) as any;
            }

            if(status === AccountStatusEnum.FAILED){
                //@OTOD: Validar se a conta ainda pode ser usada...
            }

            accountData.status = status;

            await accountData.save();

            return SendResponse(res, {
                status: true,
                message: "Status atualizado com sucesso"
            })
            
        }
    }

    static getAccountById() {
        return async (req: Request, res: Response) => {
            const {accountId} = req.params;
            const accountData = await AccountsModel.findOne({_id: accountId});
            if(!accountData){
                return SendResponse(res, {
                    status: false,
                    message: "Conta não encontrada"
                })
            }
            return SendResponse(res, {
                status: true,
                data: accountData
            })
        }
    }
}

export default AccountsController;
