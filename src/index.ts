import express from "express";
import { Dog, Cat, Chicken } from "./class/Animal";

const app = express();

app.listen(3000, () => {});

const dog = new Dog("Husky");
const cat = new Cat("Doreamon");
const chicken = new Chicken("Ga trong");

dog.callSound();
dog.run();
dog.getLegs();

cat.callSound();
cat.run();
cat.getLegs();

chicken.callSound();
chicken.run();
chicken.getLegs();
