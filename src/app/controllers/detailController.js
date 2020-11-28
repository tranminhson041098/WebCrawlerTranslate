const cheerio = require('cheerio');
const request = require('request');
class DetailController{
    index(req,res){
        
        const dataTitle = req.params.slug;
        console.log(dataTitle);
        

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
                
                const special = ["Business","Travel","Life","Sports","Video","Perspectives"];
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
                
                
                const dataResult = result.find((currentValue,index)=>{
                    
                    return currentValue.attribs.title == dataTitle||currentValue.attribs.title==dataTitle+"?";
                });
                
                
                request(""+dataResult.attribs.href,function(error,response,body){
                    
                    const data = body;
                    const $ = cheerio.load(data);
                    // res.send(""+$(".title_post").text()+$(".lead_post_detail").text()+$(".fck_detail").text());
                    const titlePost = $(".title_post").text().split(" ");
                    const leadPostDetail = $(".lead_post_detail").text().split(" ");
                    const fckDetail = $(".fck_detail").text().split(" ");
                    
                    // res.send(display);
                    res.render('detail',{titlePost:titlePost,leadPostDetail:leadPostDetail,fckDetail:fckDetail});
                })

            }
        })
           
    }
}

module.exports = new DetailController;