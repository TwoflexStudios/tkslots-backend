import { Request, Response } from "express";
import { SendResponse } from "../../helpers/res";
import bucketModel, { BucketStatusEnum, BucketTypeEnum, EventBucket, EventBucketTypeEnum, GameBucket, RepeatOptions } from "../../schemas/bucket";
import Bucket from "../../bridge/Bucket";
import { useApplication } from "../../shared/infra/http/app";

interface CreateBucketDTO {
    name: string;
    siteId: string;
    bots: number;
    type: BucketTypeEnum;
    bucket: EventBucket | GameBucket;
    repeat: RepeatOptions;
    startAfterCreation: boolean;
    botBalance: number;
    executionTime: number;
    startAt: Date;
}

class BucketsController {
    static listBuckets = async (req: Request, res: Response) => {
        const { name, siteId, status, type } = req.query;

        const filters: any = {};

        if (name) {
            filters.name = { $regex: name, $options: 'i' }; // Case-insensitive search
        }

        if (siteId) {
            filters.site = siteId;
        }

        if (status) {
            // Aceita tanto string única quanto array de status
            filters.status = Array.isArray(status) ? { $in: status } : status;
        }

        if (type) {
            filters.type = type;
        }

        const buckets = await bucketModel.find(filters).sort({ _id: -1 }).populate("site");
        
        return SendResponse(res, {
            status: true,
            data: buckets
        })
    }

    static createBucket = async (req: Request, res: Response) => {
        const { 
            name, 
            siteId, 
            bots, 
            type, 
            bucket, 
            repeat, 
            startAfterCreation,
            botBalance,
            executionTime,
            startAt
        }: CreateBucketDTO = req.body as any;

        const bucketData = await bucketModel.create({
            name,
            site: siteId,
            bots,
            type,
            bucket,
            repeat,
            botBalance,
            executionTime: (executionTime || 30 * 60),
            startAt
        });

        return SendResponse(res, {
            status: true,
            data: bucketData
        })

    }

    static playBucket = async (req: Request, res: Response) => {
        const { bucketId } = req.params;

        const bucket = await bucketModel.findById(bucketId);

        if (!bucket) {
            return SendResponse(res, {
                status: false,
                message: "Bucket não encontrado"
            }, 404)
        }

        if(bucket.status === BucketStatusEnum.RUNNING){
            return SendResponse(res, {
                status: false,
                message: "Bucket já está em andamento"
            }, 400)
        }

        new Bucket(String(bucketId)).start();

        return SendResponse(res, {
            status: true,
            message: "Bucket iniciado com sucesso"
        })
    }

    static stopBucket = async (req: Request, res: Response) => {
        const { bucketId } = req.params;
        await bucketModel.updateOne({ _id: bucketId }, { status: BucketStatusEnum.ENDED });

        useApplication().emit(`${bucketId}:stop`);


        return SendResponse(res, {
            status: true,
            message: "Bucket parado com sucesso"
        })
    }

    static updateBucket = async (req: Request, res: Response) => {
        const { bucketId } = req.params;
        const updateData = req.body;

        const bucket = await bucketModel.findById(bucketId);

        if (!bucket) {
            return SendResponse(res, {
                status: false,
                message: "Bucket não encontrado"
            }, 404)
        }

        await bucket.updateOne(updateData);

        const updatedBucket = await bucketModel.findById(bucketId);

        return SendResponse(res, {
            status: true,
            message: "Bucket atualizado com sucesso",
            data: updatedBucket
        })
    }

    static deleteBucket = async (req: Request, res: Response) => {
        const { bucketId } = req.params;

        const bucket = await bucketModel.findById(bucketId);

        if (!bucket) {
            return SendResponse(res, {
                status: false,
                message: "Bucket não encontrado"
            }, 404)
        }

        await bucketModel.deleteOne({ _id: bucketId });

        return SendResponse(res, {
            status: true,
            message: "Bucket deletado com sucesso"
        })
    }
}

export default BucketsController;