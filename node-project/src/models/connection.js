const MongoClient = require('mongodb').MongoClient;
const CONFIG = require('../config');
// var dbUrl = "mongodb://username:password@127.0.0.1:27017/dbname";
var _conn =null;
function open (){
    MongoClient.connect(CONFIG.dbUrl,{useNewUrlParser: true },
        function(error,connection){
        if(error){
            console.log(error.errmsg);
        }
            console.log("connection successfull");
            // console.log(connection);
            _conn = connection;        
        
    });
}
function get() {
    return _conn;
}
process.on('SIGINT',function(){
    console.log("App Termination Due To SIGINT");
    _conn.close();
    process.exit(0); //leaving process
});
process.once('SIGTERM',function(){
    console.log("App Termination Due To SIGTERM");
    _conn.close();
    process.exit(0); //leaving process
});
process.once('SIGUSR2',function(){
    console.log("App Termination Due To SIGUSR2 /Userdefined Signal");
    _conn.close();
    process.kill(process.pid,'SIGUSR2'); //leaving process
});
module.exports ={
    open:open,
    get:get
}