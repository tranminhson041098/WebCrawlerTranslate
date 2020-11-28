const { multipleMongooseToObject } = require('../../util/mongoose');
const Scores = require('../model/Scores');
class scoresController {
    async index(req,res,next)
    {
        await Scores.find({username:req.cookies.userid.slice(6,req.cookies.userid.length)}).then((scores)=>res.render('scores',{arrayScore:multipleMongooseToObject(scores)})).catch(next);
    }
    processScore(req,res,next){
        const personalScore ={
            username:req.cookies.userid.slice(6,req.cookies.userid.length),
            score:req.params.slug

        };
        const personScore = new Scores(personalScore);
        personScore.save().then(()=>{
            console.log('Save sucessfully')
          }).catch(next);

    }

}
module.exports = new scoresController;