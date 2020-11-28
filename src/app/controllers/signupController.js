const User = require('../model/User');

class signupController{
    index(req,res,next){
        res.render('signup');
    }
    add(req,res,next){
        const formData = req.body;
        if (formData.password!=formData.againpassword){
            res.render('signup',{fault:"Bạn chưa điền mẫu đúng"});
        }
        else{
            User.findOne({username:formData.username}).then((user)=>{
                if(user){
                    res.render('signup',{fault:"Bạn chưa điền mẫu đúng"});
                }
                else{
                    const aUser = 
                    {
                            iduser:"iduser"+formData.username,
                            username:formData.username,
                            password:formData.password
                    };
                    const newUser = new User(aUser);
                    newUser.save().then(()=>console.log('Đã thêm thông tin người dùng')).catch(next);
                    res.render('login',{notification : 'Bạn đã đăng kí thành công , Hãy tiến hành đăng nhập'});
                }
            })
        }
        
        
        
        // if (formData.password!=formData.againpassword){

        //     res.render('signup',{fault:"Bạn chưa điền mẫu đúng"});
        // }
        // else{
            
        //     User.find({}).then((users)=>{
        //         users.forEach((user)=>{
        //             if (user.username==formData.username){
        //                 res.render('signup',{faultname:"Bạn chưa điền mẫu đúng"});
                        
        //             }
        //             else{
                        
        //                 const aUser = {
        //                     iduser:"iduser"+formData.username,
        //                     username:formData.username,
        //                     password:formData.password
        //                 };
        //                 return aUser;
        //                 next();
                        
        //             }
        //         })
        //      }).then((aUser)=>{
        //         console.log(aUser);
        //         const newUser = new User(aUser);
        //         newUser.save().then(()=>console.log('Đã thêm thông tin người dùng')).catch(next);
        //         res.render('login',{notification : 'Bạn đã đăng kí thành công , Hãy tiến hành đăng nhập'});

        //     }).catch(next);
        // }
       
        
        
       
       
    }
}

module.exports = new signupController;