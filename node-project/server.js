const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const homeRoutes=require('./src/routes/home.route');
const userRoutes=require('./src/routes/user.route');
var app=express();
const port=3030;
const host='127.0.0.1';
//enable static data to make view folder visible and access
app.use(express.static(path.join(__dirname,'/src/view')));
//unable url encoded data
app.use(bodyParser.text());
//use method, router module became middleware now
app.use('/',homeRoutes);
app.use('/',userRoutes);
// app.get('/',function(req,res,next){
//     console.log();
    
//   res.sendFile(path.join(__dirname,'./src/view/index.html'));
//  })
//  app.get('/home',function(req,res,next){
//     console.log(`Hit on`,req.url);
//     res.send("This is the homepage");
//     })
    app.get('/pricing',function(req,res,next){
        console.log();
        
      res.sendFile(path.join(__dirname,'./src/view/pricing.html'));
     })
   
// app.get('/user',function(req,res,next){
//     var user={
//         name:"kiran",
//         age:25,
//         gender:"male"
//     }
//     console.log(`Hit on`,req.url);
//     res.send(200,user);
//        })
// app.get('/data',function(req,res,next){
//     console.log(`Hit on`,req.url);
//     console.log(`Hit on`,req.query);
//         res.send(`<h1>Hi Welcome</h1> ${req.query.name} your age is ${req.query.age}`);
//        });
//       app.post('/user',function(req,res,next){
//       console.log(req.body);
//     res.status(200).json(req.body)
//        })
app.listen(port,host,()=>{
    console.log(`server is running
    Port:${port}
    Host:${host}`);
   })