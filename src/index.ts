import express from 'express';
import router from './routes/test';
import path from 'path';
import dotenv from 'dotenv';

const app = express();

dotenv.config({
  path: path.resolve(__dirname, `./environments/${
  process.env.NODE_ENV}.env`)});



app.use('/', router)


app.listen(process.env.PORT, () => console.log(`Http server is running at port ${ process.env.PORT}`));