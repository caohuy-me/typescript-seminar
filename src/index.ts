import express from 'express';
import { Figure } from './class/Figure'

const app = express();

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});

let inputUser = new Figure();
inputUser.name = "Huy";


