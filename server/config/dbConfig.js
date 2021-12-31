const express = require('express');
const dbConfig = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    port: '3306',
    user: "root",
    password : "123456789"
})

con.connect(function(err){
    if(err) throw err;
    console.log(`DB connected!`);
});

module.exports = dbConfig;
