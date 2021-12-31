const express = require('express');
const fileUpload = require('express-fileupload');
const testApi = express.Router();

testApi.use(fileUpload);

testApi.post('/uploadFile', (req, res)=> {
    let uploadFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('no Files were uploaded');
    }
    uploadFile = req.files.uploadFile;
    console.log(uploadFile)
})

module.exports = testApi;
