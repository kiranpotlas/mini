const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    _id:Number,
    name:String,
    city:String,
    age:Number,
    salary: Number,
    status: Boolean,
    mobile_number: Number,
    message:mongoose.Mixed,
    address:{
        house_no:Number,
        street:String,
        pincode:Number,
        city:String,
        state:String,
    },
    languages:[String]
});
// mongoose.model('model objec Name','Shema name',"collectio name")
mongoose.model('User',usersSchema,'depC');
// mongoose.model('User',usersSchema); ///users
// Note: If we do not provide mapped collection name for schema 

// it will auto configure with model name
//  (all small letter extra s at end )