const Falseword = require('../model/Falseword');
const Personalcourse = require('../model/Personalcourses');

class multiplechoiceController{
    async index(req,res,next){

        // const months = ["January", "February", "March", "April", "May", "June", "July"];

        // const random = Math.floor(Math.random() * months.length);
        // console.log(random);
        // console.log(random, months[random]);
        const searchid = req.cookies.userid;
        let wordSearch = [];
        let wordResult = [];
        let wordRandom = [];
        let sendData = [];
        await Personalcourse.find({iduser:searchid}).then((personalcourses)=>{
            personalcourses.forEach((currentvalue,index)=>{
                wordSearch.push(currentvalue.wordsearch);
            });
            personalcourses.forEach((currentvalue,index)=>{
                wordResult.push(currentvalue.wordresult);
            });

        }).catch(next);
        await Falseword.find({}).then((falsewords)=>{
            falsewords.forEach((currentvalue,index)=>{
                wordRandom.push(currentvalue.falseword);
            });
        }).catch(next);
        // console.log(wordSearch);
        // console.log(wordResult);
        // console.log(wordRandom);
        for(let i = 0;i<wordSearch.length;i++)
        {
            let random = Math.floor(Math.random() * wordRandom.length);
            sendData[i]={
                wordsearch : "What is the meaning of "+wordSearch[i],
                wordresult : wordResult[i],
                wordfakeone : wordRandom[random],
                wordfaketwo : wordRandom[i],
                correct : wordResult[i]
            }
        }
        
        
        console.log(sendData);

        res.render('multiplechoice',{sendData:sendData});
        
    }
}
module.exports = new multiplechoiceController;
