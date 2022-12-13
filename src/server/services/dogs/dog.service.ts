import {Dog} from "../../mongoose";

const getAllDogs = async () => {
    return Dog.find();
}

const getDogById = async (id: string) => {
    return Dog.findById(id);
}

export default {
    getAllDogs,
    getDogById
}