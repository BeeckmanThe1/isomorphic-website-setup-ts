import {Express} from 'express';
import {rootRouter, apiRouter} from "./index";

export const initializeRouting = (app: Express) => {
    app.use('/', rootRouter)
    app.use('/api', apiRouter)
}