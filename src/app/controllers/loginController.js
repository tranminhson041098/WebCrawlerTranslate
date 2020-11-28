const User = require('../model/User');
class loginController{
    //[GET login]
    index(req,res,next){

        res.render('login');
    }
    check(req,res,next){
        const formdata = req.body;
        const username = formdata.username;
        const password = formdata.password;
        
        if(username==null){
            res.render('login');
        }
        else{
            User.findOne({username:username}).then((user)=>{
                if(!user){
                    res.render('login');
                }
                else{
                    if(user.password==password){
                        res.cookie('userid',user.iduser);
                        next();
                    }
                    else{
                        res.render('login');
                    }
                }
            })
        }

    }
             

}

    



module.exports = new loginController;