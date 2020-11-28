const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    iduser :{type:String , maxlength:255},
    username :{type:String, maxlength: 350},
    password :{type:String, maxlength: 350},
})

module.exports = mongoose.model('User',User);