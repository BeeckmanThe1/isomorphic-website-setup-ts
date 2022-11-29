import express from 'express';
import {initializeRouting} from "./routes/routes.init";
import {initApp} from "./app";

const app = express()

initializeRouting(app)
initApp(app).then(() => console.log('Application running successfully'));
