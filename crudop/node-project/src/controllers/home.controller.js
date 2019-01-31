var path = require('path');
module.exports.root = function(req,res,next){
    console.log();    
    res.send("Server is Running");
}
module.exports.home  = function(req,res,next){
    console.log();    
    res.sendFile(path.join(__dirname,'../views/index.html'));
}