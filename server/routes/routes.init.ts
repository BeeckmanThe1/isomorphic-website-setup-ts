import {Express} from 'express';
import {dogRouter, rootRouter} from "./dogs";

export const initializeRouting = (app: Express) => {
    app.use('/', rootRouter)
    app.use('/dogs', dogRouter)
}