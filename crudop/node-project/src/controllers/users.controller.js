var _conn = require('../models/connection');
var ObjectId = require('mongodb').ObjectId;
module.exports.getUsers= function(req,res,next){
console.log(req.query);
   var offset = (req.query.offset==undefined)?0:
                Number(req.query.offset);
   var count = (req.query.count==undefined)?3:
                Number(req.query.count);
    console.log(offset+"   "+count);
    
   var collection = _conn.get().db('development').collection('depC');
   collection.find({}).skip(offset).limit(count)
   .toArray(function(error,docs){
        if(error){
            var err = {
                name:"Internal Server Error",
                message:"Users are not Found"
            }
            res.status(500).json(err);
        }else{
            console.log(docs.length);            
            res.status(200).json(docs);
        }
   });
}
module.exports.getUser =function(req,res,next){
    console.log(req.params.userId);    
   var collection = _conn.get().db('development').collection('depC');
   
   collection.findOne({"_id":ObjectId(req.params.userId)},
   function(error,doc){
        if(error){
            var err = {
                name:"Internal Server Error",
                message:"Users are not Found"
            }
            res.status(500).json(err);
        }else{
            res.status(200).json(doc);
        }
    });
    
}
module.exports.addUser =function(req,res,next){
    var data = [];
    console.log(req.body);    
    if(req.body.length && req.body.length >0){
        data= req.body;
    }else{
        data.push(req.body);
    }
    
   var collection = _conn.get().db('development').collection('depC');
    collection.insertMany(data,function(error,response){
       if(error){
        var err = {
            name:"Internal Server Error",
            message:"Insertion Failed"
        }
        res.status(500).json(err);  
       }else{
        res
        .status(200)
        .json(response.ops)
       }
    })
   
}
module.exports.updateUser =function(req,res,next){
    console.log(req.body);    
    console.log(req.params);   
    if(req.params.userId){
        // collection.updateOne(filter,update,callback)
   var collection = _conn.get().db('development').collection('depC');
    var filterQ= {"_id":ObjectId(req.params.userId)};
    var updateQ = {
        $set :req.body
    }
    collection.updateOne(filterQ,updateQ,(error,response)=>{
        if(error){
            var err = {
                name:"Internal Server Error",
                message:"Updation Failed"
            }
            res.status(500).json(err);  
           }else{
            res
            .status(200)
            .json(response)
           }
    });
    }else{
        res
        .status(404)
        .json({
            name:"Not Found",
            message:"User Id Is Not Found"
        })
    } 
   
}
module.exports.deleteUser =function(req,res,next){
    console.log(req.body);    
    console.log(req.params.userId);   
    if(req.params.userId){
    var collection = _conn.get().db('development').collection('depC');
    var filterQ= {"_id":ObjectId(req.params.userId)};
    
    collection.deleteOne(filterQ,function(error,response){
        if(error){
                var err = {
                    name:"Internal Server Error",
                    message:"Deletion Failed"
                }
                res.status(500).json(err);  
           }else{              
            res
            .status(200)
            .json(response.result)
           }
    });
    }else{
        res
        .status(404)
        .json({
            name:"Not Found",
            message:"User Id Is Not Found"
        })
    }  
}