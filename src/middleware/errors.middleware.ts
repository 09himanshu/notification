import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/errors.utils'

export const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    try {
        res.status(statusCode).send({
            status: "error",
            statusCode,
            message,
        });
    } catch (err) {
        res.status(statusCode).send({
            status: "error",
            statusCode,
            message,
        });
    }
};