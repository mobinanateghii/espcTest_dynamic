const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payDataSchema = new Schema({
    Form_key :String,
    name: String,
    Service_Provider: String,
    Description:String,
});

const payData = mongoose.model('payData' , payDataSchema , 'payData');


module.exports = payData;


