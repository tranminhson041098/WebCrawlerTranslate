const homeRouter = require('./home');
const detailRouter = require('./detail');
const scoresRouter = require('./scores');
const multiplechoiceRouter = require('./multiplechoice');
const readhtmlRouter = require('./readhtml');
const listpassagesRouter = require('./listpassages');
const searchRouter = require('./search');
const loginRouter = require('./login');
const signupRouter = require('./signup');


function route(app){
     
    app.use('/login',loginRouter);
    app.use('/signup',signupRouter);
    app.use('/scores',scoresRouter);
    app.use('/multiplechoice',multiplechoiceRouter);
    // app.use('/readhtml',readhtmlRouter);

    app.use('/search',searchRouter);
    app.use('/detail',detailRouter);
    app.use('/listpassages',listpassagesRouter);
    app.use('/',homeRouter);
}
module.exports = route;