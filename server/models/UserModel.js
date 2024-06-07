const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    name : {
        type : String,
        required : [true, "provide name"]
    },
    email : {
        type : String,
        required : [true,"provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "provide password"]
    },
    token:{ 
        type:String
      },
    profile_pic : {
        type : String,
        default : ""
    },
    resetPasswordExpires: {
        type: Date,
      },
},{
    timestamps : true
})

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel