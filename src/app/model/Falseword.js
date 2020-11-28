const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Falseword = new Schema({
    falseword :{type:String , maxlength:255},
    
})

module.exports = mongoose.model('Falseword',Falseword);