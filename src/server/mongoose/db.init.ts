import {Dog} from "./models";
const dogData = require('./data/dog.data.json');

export const seedDb = async () => {
        const dog1 = {name: 'Dog 1', age: 12, breed: 'Labrador'};
        const dog2 = {name: 'Dog 2', age: 12, breed: 'Poodle'};
        const dog3 = {name: 'Dog 3', age: 12, breed: 'Labradoodle'};

        const dogs = [dog1, dog2, dog3]

        const dogDoc1 = new Dog(dog1);
        const dogDoc2 = new Dog(dog2);
        const dogDoc3 = new Dog(dog3);

        const dogsDocs = [dogDoc1, dogDoc2, dogDoc3];

        // await Dog.insertMany(dogsDocs)
        // await Promise.all([dogDoc1.save(), dogDoc2.save(), dogDoc3.save()]);
        await Dog.insertMany([...dogs, ...dogData])
}