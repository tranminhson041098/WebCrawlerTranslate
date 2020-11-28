const Course = require('../model/Course');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');
const request = require('request');
const cheerio = require('cheerio');
const Personalcourse = require('../model/Personalcourses');
class searchController{
    index(req,res,next){
        const wordSearch = req.params.slug;
        console.log(wordSearch.length);
        const abc = wordSearch.slice(36,wordSearch.length).replace(',','').replace('?','').replace('.','').replace('\"','').replace('(','').replace(')','');
        
        Course.findOne({wordsearch:abc}).then((courses)=>{

            if(courses){
              res.status(200||304).json({course:courses});
            }
            else{
              const link = "http://tratu.coviet.vn/hoc-tieng-anh/tu-dien/lac-viet/A-V/"+abc+".html";
              request(link,function(error,response,body){
                
                const data = body;
                const $ = cheerio.load(data);
                const courses = $(".m").text();
                console.log('this is cookies:')
                
                const personalWord ={
                  iduser:"iduser"+req.cookies.userid.slice(6,req.cookies.userid.length),
                  wordsearch:abc,
                  wordresult:courses.slice(0,40)+"..."

                }
                const personalCourse = new Personalcourse(personalWord);
                personalCourse.save().then(()=>{
                  console.log('Save sucessfully')
                }).catch(next);

                res.status(200||304).json({course:courses});
              })
            }

        });
    }

}

module.exports = new searchController;