import fs from "fs";
import https from "https";
import mongoose from "mongoose";
import {Express} from 'express';
import {seedDb} from "../mongoose";

export const initApp = async (app: Express) => {
    try {
        const port = process.env.PORT
        const httpsOptions = {
            key: fs.readFileSync('./certificates/localhost-key.pem'),
            cert: fs.readFileSync('./certificates/localhost.pem')
        }
        const httpsServer = https.createServer(httpsOptions, app)

        await mongoose.connect(process.env.MONGO_URL || '')
        await seedDb();

        httpsServer.listen(port, () => console.log(`[HTTPS server]: Server is running at https://localhost:${port}`))
    } catch (err) {
        console.log('err', err)
    }
}