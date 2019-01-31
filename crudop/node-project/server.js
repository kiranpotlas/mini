require('./src/models/connection').open();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./src/routes/home.route');
const userRoutes = require('./src/routes/user.route');
var app = express();
const port = 3030;
const host = '127.0.0.1';

//enable static data context
// app.use(express.static(path.join(__dirname,'./src/views')));

//unable url encoded data
// app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(bodyParser.text());

//Mapping Routes
app.use('/',homeRoutes);
app.use('/',userRoutes);

app.listen(port,host,()=>{
    console.log(`Server is Running On Happy
    Port : ${port}
    Host :${host}`); 
       
})