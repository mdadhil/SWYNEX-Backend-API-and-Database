const mongoose = require('mongoose');
const schema = new mongoose.Schema({first_name:{type:String,required:true,trim:true},last_name:{type:String,default:''},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,select:false},role:{type:String,default:'User'},avatar:{type:String,default:''}}, {timestamps:true});
module.exports=mongoose.model('User',schema);
