const mongoose=require('mongoose');
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true,minlength:2,maxlength:120},platform:{type:String,required:true,enum:['Instagram','Facebook','LinkedIn','OLX','Twitter','YouTube']},status:{type:String,enum:['Active','Paused','Completed'],default:'Active'},budget:{type:Number,required:true,min:0.01},spent:{type:Number,default:0,min:0},startDate:{type:Date},endDate:{type:Date},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true}}, {timestamps:true});
module.exports=mongoose.model('Campaign',schema);
