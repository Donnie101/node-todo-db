const mongoose = require('mongoose')

let User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    todos:{
        type:Array,
        default:[]
    }
});

module.exports = {User}