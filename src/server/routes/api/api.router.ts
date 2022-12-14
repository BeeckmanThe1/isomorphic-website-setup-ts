import express from 'express';
import { dogRouter } from './dogs';

export const router = express.Router();

router.use('/dogs', dogRouter)