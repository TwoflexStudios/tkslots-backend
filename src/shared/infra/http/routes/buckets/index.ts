import { Router } from "express";
import BucketsController from "../../../../../controllers/buckets/BucketsController";
import AuthController from "../../../../../services/authvalidation";
import { PermissionsEnum } from "../../../../../schemas/users";

const bucketsController = BucketsController;

const BucketsRoutes = Router();

BucketsRoutes.get(
    "/",
    AuthController.QueryAuth(),
    AuthController.CheckPermission(PermissionsEnum.READ_BUCKETS),
    bucketsController.listBuckets
);
BucketsRoutes.post(
    "/",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.CREATE_BUCKETS),
    bucketsController.createBucket
);
BucketsRoutes.post(
    "/play/:bucketId",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.CREATE_BUCKETS),
    bucketsController.playBucket
);
BucketsRoutes.post(
    "/stop/:bucketId",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.CREATE_BUCKETS),
    bucketsController.stopBucket
);
BucketsRoutes.put(
    "/:bucketId",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.UPDATE_BUCKETS),
    bucketsController.updateBucket
);
BucketsRoutes.delete(
    "/:bucketId",
    AuthController.HeaderAuth(),
    AuthController.CheckPermission(PermissionsEnum.DELETE_BUCKETS),
    bucketsController.deleteBucket
);

export default BucketsRoutes;