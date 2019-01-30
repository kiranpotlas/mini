const MongoClient=require('mongodb').MongoClient
// var dbUrl="mongodb://127.0.0.1:23456/dbname";
var dbUrl="mongodb://user123:user123@ds151354.mlab.com:51354/development";
var _conn;
module.exports.open=()=>{
MongoClient.connect(dbUrl, {useNewUrlParser: true}, 
    function(error,connection){
if(error){
    console.log(error);    
}else{
    console.log("connection successful");
    _conn=connection;
    }
});
}
module.exports.get=()=>{
    return _conn;
}