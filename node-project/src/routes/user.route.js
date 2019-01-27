const router=require('express').Router();
const bodyParser=require('body-parser');

router
.route("/user")
.get(function(req,res,next){
    var user={
        "userId":123,
        "userName":"kali",
        "age":25
    }
    console.log(`details`,req.url);
    res.send(200,user)
});

router
.route("/user")
.post(function(req,res,next){
    console.log(req.body);
    res.status(200).json(req.body)    
})
module.exports=router;