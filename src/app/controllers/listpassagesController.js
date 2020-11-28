//const { request } = require("express");
const cheerio = require('cheerio');
const request = require('request');
class listpassagesController{
    index(req,res){
       
        
        request("https://e.vnexpress.net/",function(error,response,body){
            if(error){
                console.log(error);
                res.render('listpassages',{html:"There is an error connection"})
            }
            else{
                const data = body;
                //console.log(typeof(data))
                //use as a jquery object   //load all data into jquery object 
                const $ = cheerio.load(data);
                //Filter all tags has the attribute data-medium
                //const list = $(data).find("[data-medium]");
                const list = $("[data-medium]");
                
                const special = ["News","Business","Travel","Life","Sports","Video","Perspectives"];
                //building a filterfunction
                const filter = [];
                list.each(function(index,element){
                    if (element["attribs"]["title"]!==undefined){
                        const dataelement = element;
                        const validate = special.some((value)=>{
                            
                            return value == dataelement["attribs"]["title"];
                        })
                        
                        if (validate==false){
                            
                                filter.push(dataelement);
                        }
                    }
                    //console.log(element["attribs"]["title"]);
                });
                const result = [];
                console.log(result.length);
                filter.forEach((element)=>{
                    if(result.length==0){
                        result.push(element)

                    }
                    else{
                        const tempdata = element;
                        const validate2 = result.some((value)=>{
                            return value["attribs"]["title"]==tempdata["attribs"]["title"];
                        })
                        //if(element["attribs"]["title"])
                        if(validate2==false){
                            result.push(tempdata);
                        }
                    }
                     //console.log(element["attribs"]["title"]);
                })
                //GET successful result 
                // result.forEach((preciousdata)=>{
                //     console.log(preciousdata["attribs"]["title"]);
                // })

                //Use query parameter for pagination    
                const page = parseInt(req.query.page)||1; //number of page
                const perPage = 6; //element for each page

                const start = (page-1)*perPage;
                const end = page*perPage;
                
                const parsingResult = result.slice(start,end);
                const previousPage = page-1;
                const nextPage = page+1;
                
                 
                //console.log(list);
                res.render('listpassages',{html:parsingResult,previousPage:previousPage,nextPage:nextPage});
            }
        })
    

        //res.render('listpassages');
    }
}

module.exports = new listpassagesController;