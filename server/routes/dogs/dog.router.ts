import express from 'express';
import {Dog} from "../../mongoose/models";

export const router = express.Router();

router.get('/', async (req, res) => {
    const allDogs = await Dog.find();
    return res.status(200).json(allDogs);
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    return res.status(200).json(dog);
});

