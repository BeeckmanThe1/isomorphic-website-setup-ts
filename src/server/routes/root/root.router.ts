import express from 'express';
import {apiRouter} from "../api";

export const router = express.Router();

router.get('/',(req, res) => {
    res.send('Express + TypeScript Server');
});

router.use('/api', apiRouter)