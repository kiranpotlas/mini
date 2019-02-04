const mongoose = require('mongoose');
const CONFIG = require('../config');
require('./user.model');
var authOptions ={
    useNewUrlParser:true,
    user:CONFIG.dbUser,
    pass:CONFIG.dbPass,
    authSource:CONFIG.dbAuth
}
mongoose.connect(CONFIG.dbUrl,authOptions);

var connection  =mongoose.connection;
connection.once('open',function(){
    console.log("MongoDb Connection Successfull With Mongoose !");
});
connection.on('error',function(error){
    console.log("MongoDb Connection Failed With Mongoose !");
    console.log(error);
    
})