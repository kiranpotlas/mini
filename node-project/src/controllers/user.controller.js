var _conn=require('../models/connection').get();
module.exports.getUsers=function(req,res,next){
    var db=_conn.db('development')
    var user={
        "userId":123,
        "userName":"kali",
        "age":25
    }
    console.log(`details`,req.url);
    res.send(200,user)
}
module.exports.addUser=function(req,res,next){
    console.log(req.body);
    res
    .status(200)
    .json(req.body)    
}
module.exports.updateUsers=function(req,res,next){
    console.log(req.body);
    console.log(req.params);
    res
    .status(200)
    .json(req.body)    
}
module.exports.minorUpdates=function(req,res,next){
    console.log(req.body);
    console.log(req.params);
    res
    .status(200)
    .json(req.body)    
}
module.exports.deleteUser=function(req,res,next){
    console.log(req.body);
    console.log(req.params);
    res
    .status(200)
    .json(req.body)    
}