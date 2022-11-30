import express from 'express';
import {Dog} from "../../mongoose";

export const router = express.Router();

router.get('/',(req, res) => {
    res.send('Express + TypeScript Server');
});