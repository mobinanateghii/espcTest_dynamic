const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   email: String,
   password: String,
   username: String
});

const user = mongoose.model('user' , userSchema , 'users');

module.exports = user;
