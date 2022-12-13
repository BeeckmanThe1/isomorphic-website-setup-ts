import {Dog} from "../../mongoose";
import { Request, Response } from "express";
import dogService from "../../services/dogs/dog.service";

const getDog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const dog = await dogService.getDogById(id);

    return res.status(200).json(dog);
}

const getDogs = async (req: Request, res: Response) => {
    const allDogs = await dogService.getAllDogs();

    return res.status(200).json(allDogs);
}

export default {
    getDog,
    getDogs,
}