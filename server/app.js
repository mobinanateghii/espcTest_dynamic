const express = require('express');
const appConfig = require('./config/appConfig');
const dbConfig = require('./config/dbConfig');
const api = require('./routes/api');
const app = express();


appConfig.use('/api' ,api );
