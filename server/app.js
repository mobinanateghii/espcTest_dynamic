const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const api = require('./routes/api');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.use('/api' ,api );


app.listen(3000 , ()=>{console.log('the server is running!')});
