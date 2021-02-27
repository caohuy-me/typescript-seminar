import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log(`server running on port 3000`);
  });
app.get('/', (req, res) => {
    res.send('hello abcxyz');
});
