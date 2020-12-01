const listpassagesController = require('./listpassagesController');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const User = require('../model/User');

app.use(cookieParser());
class HomeController{
    index(req,res,next){
      
        console.log('goodbye');
        
        res.render('home');
    }
}

module.exports = new HomeController;