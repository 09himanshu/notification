import express from 'express'
import {env} from './config/env.config'
import {errorMiddleware} from './middleware/errors.middleware'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(errorMiddleware)

const serverPort = Number(env?.notificationAppPort)
const serverHost = String(env?.notificationAppHost)

app.listen(serverPort, serverHost, () => {
    console.log(`🚀 Server is running at http://${serverHost}:${serverPort}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});