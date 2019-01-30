var path =require ('path');
module.exports.root=function(req,res,next){
    console.log();
    res.send('server is running')   
}
module.exports.home=function(req,res,next){
    console.log(req.body);
res.send('This is the homepage');
res.status(200).json(req.body)   
}