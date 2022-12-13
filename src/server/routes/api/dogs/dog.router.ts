import express from 'express';
import {Dog} from "../../../mongoose/models";
import dogController from "../../../controllers/dogs/dog.controller";

export const router = express.Router();

router.get('/', dogController.getDogs);
router.get("/:id", dogController.getDog);
