// require('./src/models/connection').open();
require('./src/models/conn');

const express = require('express');
const CONFIG = require('./src/config');
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./src/routes/home.route');
const userRoutes = require('./src/routes/user.route');
var app = express();


//enable static data context
// app.use(express.static(path.join(__dirname,'./src/views')));

//unable url encoded data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(bodyParser.text());

//Mapping Routes
app.use('/',homeRoutes);
app.use('/',userRoutes);

app.listen(CONFIG.port,CONFIG.host,()=>{
    console.log(`Server is Running On Happy
    Port : ${CONFIG.port}
    Host :${CONFIG.host}`); 
       
})