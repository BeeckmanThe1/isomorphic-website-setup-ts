import express from 'express';
import { initApp } from './app';
import { router } from './routes';

const app = express()

app.use(router);
initApp(app).then(() => console.log('Application running successfully'));
