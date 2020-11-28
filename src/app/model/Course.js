const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    wordsearch :{type:String , maxlength:255},
    wordresult :{type:String, maxlength: 2000},
})

module.exports = mongoose.model('Course',Course);