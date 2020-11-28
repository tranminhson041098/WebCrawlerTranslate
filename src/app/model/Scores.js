const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Score = new Schema({
    username :{type:String , maxlength:255},
    score :{type:String , maxlength:255},
    
})

module.exports = mongoose.model('Score',Score);