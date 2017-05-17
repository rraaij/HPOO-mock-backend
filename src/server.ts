import express = require('express');
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import { NestFactory } from 'nest.js';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());
instance.use(logger('dev'));

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000, () => console.log('HP-OO MOCK BACKEND is listening on port 3000'));
