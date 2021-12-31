const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appConfig = express();
const port = process.env.PORT || 3000;


appConfig.use(cors());
appConfig.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
appConfig.use(bodyParser.json());

appConfig.listen(port, () => {
    console.log(`the server is running! on port ${port}`)
});


module.exports = appConfig;


