var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports.getUsers= function(req,res,next){
    console.log(req.query);
   var offset = (req.query.offset==undefined)?0:
                Number(req.query.offset);
   var count = (req.query.count==undefined)?3:
                Number(req.query.count);
    console.log(offset+"   "+count);    
   User.find({})
   .skip(offset).limit(count)
   .exec(function(error,docs){
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
   
   User.findById(req.params.userId)
   .exec(function(error,doc){
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
module.exports.addUsers =function(req,res,next){
    var data = [];
    console.log(req.body);    
    if(req.body.length && req.body.length >0){
        data= req.body;
    }else{
        data.push(req.body);
    }   
    User.insertMany(data,function(error,response){
       if(error){
        var err = {
            name:"Internal Server Error",
            message:"Insertion Failed",
            error:error
        }
        res.status(500).json(err);  
       }else{
        res
        .status(200)
        .json(response)
       }
    })
   
}
module.exports.addUser =function(req,res,next){
    var user = new User(req.body);
    
    user.save(function(error,response){
       if(error){
        var err = {
            name:"Internal Server Error",
            message:"Insertion Failed",
            error:error
        }
        res.status(500).json(err);  
       }else{
        res
        .status(200)
        .json(response)
       }
    })
   
}
module.exports.updateUser =function(req,res,next){
    console.log(req.body);    
    console.log(req.params);   
    if(req.params.userId){
        // collection.updateOne(filter,update,callback)
   var collection = _conn.get().db('srbank').collection('employees');
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
    var collection = _conn.get().db('srbank').collection('employees');
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