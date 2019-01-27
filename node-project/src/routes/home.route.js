const router=require('express').Router();
// const path=require('path')
router
.route("/")
.get(function(req,res,next){
    console.log();
    res.send('server is running');    
})
router
.route("/home")
.get(function(req,res,next){
    console.log();
res.send('This is the homepage');    
})
module.exports=router;