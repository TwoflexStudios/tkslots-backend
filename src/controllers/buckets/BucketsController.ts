import { Request, Response } from "express";
import { SendResponse } from "../../helpers/res";
import bucketModel, { BucketTypeEnum, EventBucket, EventBucketTypeEnum, GameBucket, RepeatOptions } from "../../schemas/bucket";

interface CreateBucketDTO {
    name: string;
    siteId: string;
    bots: number;
    type: BucketTypeEnum;
    bucket: EventBucket | GameBucket;
    repeat: RepeatOptions;
    startAfterCreation: boolean;
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

        const buckets = await bucketModel.find(filters);
        
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
            startAfterCreation 
        }: CreateBucketDTO = req.body as any;

        const bucketData = await bucketModel.create({
            name,
            site: siteId,
            bots,
            type,
            bucket,
            repeat,
            startAfterCreation
        });

        return SendResponse(res, {
            status: true,
            data: bucketData
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