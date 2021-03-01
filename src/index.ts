import express from 'express';
import { Human } from './class/Human'

const app = express();

app.listen(3000, () => {

});

let inputUser = new Human();
inputUser.name = "Huy";
console.log(inputUser.name);


