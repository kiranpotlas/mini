const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
// const homeRoutes=require('./src/routes/home.route');
// const userRoutes=require('./src/routes/user.route');
var app=express();
const port=3030;
const host='127.0.0.1';
//enable static data to make view folder visible and access
app.use(express.static(path.join(__dirname,'/src/views')));
//unable url encoded data
app.use(bodyParser.text());
//use method, router module became middleware now
// app.use('/',homeRoutes);
// app.use('/',userRoutes);
  app.get('/',function(req,res,next){
    console.log();
    res.sendFile(path.join(__dirname,'./src/views/index.html'));
   })
  app.get('/feedback',function(req,res,next){
    console.log();
    res.sendFile(path.join(__dirname,'./src/views/feedback.html'));
   })
  app.get('/getin',function(req,res,next){
    console.log();
    res.sendFile(path.join(__dirname,'./src/views/getin.html'));
   })
  app.get('/highlights',function(req,res,next){
      console.log(); 
      res.sendFile(path.join(__dirname,'./src/views/highlights.html'));
   })
  app.get('/login',function(req,res,next){
      console.log();
      res.sendFile(path.join(__dirname,'./src/views/login.html'));
   })
  app.get('/matches',function(req,res,next){
      console.log();
      res.sendFile(path.join(__dirname,'./src/views/matches.html'));
   })
  app.get('/register',function(req,res,next){
      console.log();
      res.sendFile(path.join(__dirname,'./src/views/register.html'));
   })
     
  app.get('/team',function(req,res,next){
      console.log();
      res.sendFile(path.join(__dirname,'./src/views/team.html'));
   })
  app.listen(port,host,()=>{
    console.log(`server is running
    Port:${port}
    Host:${host}`);
   })