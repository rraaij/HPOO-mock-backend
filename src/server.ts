import express = require('express');
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());
instance.use(logger('dev'));

// Fixing CORS
instance.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000, () => console.log('HP-OO MOCK BACKEND is listening on port 3000'));
