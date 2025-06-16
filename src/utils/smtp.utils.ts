import mailder from 'nodemailer'
import {env} from '../config/env.config'

const transport = mailder.createTransport({
    host: env.smtpHost,
    port: Number(env.smtpPort),
    auth: {
        user: env.smtpUser,
        pass: env.smtpPassword,
    }
})

export default transport