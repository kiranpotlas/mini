const mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSchema = new Schema({
    name:String,
    city:String,
    status: Boolean,
    mobile_number: Number,
    message:mongoose.Mixed,
})
mongooose.model('Product',productSchema,'products')