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
        type:String,
        required:true,
        min:5,


    },
    profile_image:{
        type:String,
        required:false
    },
    profile_title:{
        type:String,
        required: false
    },
});
module.exports = mongoose.model('User',userSchema);
