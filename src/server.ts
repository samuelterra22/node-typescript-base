import 'dotenv/config';
import express from 'express';
import * as bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8080, () => {
  console.log('🚀 Server started on port 3333');
});
