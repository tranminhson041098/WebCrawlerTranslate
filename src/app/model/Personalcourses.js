const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Personalcourse = new Schema({
    iduser :{type:String , maxlength:255},
    wordsearch :{type:String , maxlength:255},
    wordresult :{type:String, maxlength: 2000},
})

module.exports = mongoose.model('Personalcourse',Personalcourse);