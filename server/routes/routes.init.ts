import {Express} from 'express';
import {rootRouter, apiRouter} from ".";

export const initializeRouting = (app: Express) => {
    app.use('/', rootRouter)
    app.use('/api', apiRouter)
}