import { Job } from "bullmq";
import bucketModel, { BucketStatusEnum } from "../../../schemas/bucket";
import Bucket from "../../../bridge/Bucket";

const runScheduledBucketsJobs = async (job: Job) => {
    const buckets = await bucketModel.find({
        status: BucketStatusEnum.SCHEDULED, // Somente buckets agendados
        startAt: {
            $lte: new Date()
        }
    });

    buckets.map(bucket => {
        new Bucket(bucket._id.toString()).start();
    })

}

export default runScheduledBucketsJobs;
