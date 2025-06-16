import {Request, Response,NextFunction} from 'express'
import * as Errors from '../utils/errors.utils'
import * as Helper from '../helper/common.helper'


const sendOtp = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let otp = Helper.generateOtp()
        
    } catch (err) {
        return next(new Errors.INTERNALSERVER('Something went wrong'))
    }
}