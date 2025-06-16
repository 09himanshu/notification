import {z} from 'zod'
import {config} from 'dotenv'

config()

const envSchema = z.object({
    notificationAppPort: z.string(),
    notificationAppHost: z.string(),
    smtpHost: z.string(),
    smtpPort: z.string(),
    smtpUser: z.string(),
    smtpPassword: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    throw new Error('Invalid environment variables')
}

export const env = _env.data