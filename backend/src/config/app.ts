import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import './database';

import accountControllers from '../controllers/account/Account.controller';
import transfersControllers from '../controllers/transfers/transfers.controller';
import addresseeControllers from '../controllers/addressee/Addressee.controller';

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.set('port', process.env.PORT || 8000);
//add controllers
app.use(accountControllers);
app.use(transfersControllers);
app.use(addresseeControllers);

app.use(express.static('uploads'));

app.listen(app.get('port'), () => {
  console.log(`Server on ports: ${app.get('port')}`);
});

export default app;