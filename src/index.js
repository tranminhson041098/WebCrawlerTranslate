const express = require('express');
const app = express();
const path = require('path')
const route = require('./routes');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const db = require('./config/db');
const port = 3000;

//use cookie-parser to reaf cookies from browser
app.use(cookieParser());
//Connect to database server // webcrawler // use for checking and finding words
db.connect()

//in case pass data in way of html
app.use(express.urlencoded({
    extended: true
}));
route(app);

//Log requests to server
app.use(morgan('combined'));


//Consider static file as a part of app
app.use(express.static(path.join(__dirname,'public')));
//Configuration for template engine handlebars
//Helper use as callback when definition template engine
//haha app.engine('',())
app.engine('hbs',handlebars({extname:'.hbs',helpers : {sum : function(a,b){
    return a+b;}
 }}));
 app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources','views'));


app.listen(port,()=>{
    console.log('This is the request from client');
});
