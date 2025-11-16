import { Response } from "express";

type IErrorResponse = {
    status: false,
    message: string;
    trace?: any;
}

type ISuccessResponse<T> = {
    status: true,
    message?: string;
    data?: T | any;
    pagination?: {
        page: number;
        perPage?: number;
        totalItems?: number;
        totalPages: number;
    }
    trace?: any;
}

export type IResponseModel<T = any> = IErrorResponse | ISuccessResponse<T>;

export const SendResponse = (res: Response, result: IResponseModel, statusCode: number = 200) => {
    return res.status(statusCode).json(result)
}