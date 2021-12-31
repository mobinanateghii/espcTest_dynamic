const express = require('express');
const testApi = require("../routes/testApi");
const api = express();

api.use('/testApi' , testApi)

module.exports = api;
