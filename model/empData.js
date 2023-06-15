const mongoose=require('mongoose');
const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:String,
    position:{
        type:String,
        required:true
    },
    salary:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});
const empModel=mongoose.model('employeeData',empSchema);
module.exports=empModel;