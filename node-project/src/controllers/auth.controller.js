var _conn = require('../models/connection');
var ObjectId = require('mongodb').ObjectId;

module.exports.registerUser=(req,res,next)=>{
   var collection = _conn.get().db('srbank').collection('sr_users');
   if(req.body && req.body.name && req.body.email && req.body.password && req.body.phoneNumber){
        collection.insertOne(req.body,function(err,user){
            if(err){
                var error ={
                    name:"Internal Server Error",
                    message:"Registration Faild"
                };
                res.status(500).json(error);  
            }else{
                var response = {
                    status:"ok",
                    message:"Registration Successfull",
                    user:user
                }
                res.status(200).json(response);  

            }
        })
   }else{
       var error ={
           name:"Not Found",
           message:"Required feilds are missing"
       };
       res.status(404).json(error);       
   }
    
}
module.exports.loginUser =(req,res,next)=>{
    var collection = _conn.get().db('srbank').collection('sr_users');
    if(req.body && req.body.email && req.body.password){
        var filterQ = {"email":req.body.email}
        collection.findOne(filterQ,function(err,user){
             if(err){
                 var error ={
                     status:false,
                     name:"Internal Server Error",
                     message:"Failed To Login"
                 };
                 res.status(500).json(error);  
             }else if(!user){
                var error ={
                    status:false,
                    name:"User Not Found",
                    message:"Failed Find To Fetch User"
                };
                res.status(404).json(error);  
            }else {
                if(user.password === req.body.password){
                    var response = {
                        status:true,
                        message:"Login Successfull",
                        user:user
                    }
                    res.status(200).json(response);  
                }else{
                    var response = {
                        status:false,
                        message:"Login Faild Password Not Match"
                    }
                    res.status(400).json(response);  
                }
                 
 
             }
         })
    }else{
        var error ={
            name:"Not Found",
            message:"Required feilds are missing"
        };
        res.status(404).json(error);       
    }
     
 }