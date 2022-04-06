const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
         min:4,
         max:50,
         unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:Number,
        required:true,
        min:5,


    }
});
module.exports = mongoose.model('User',userSchema);