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
      areaOfInterest:{
        type : String,
        default : "Not Provided"
    },
    achievements:{
        type : String,
        default : "Not Provided"
    },
    rating:{
        type:Number,
        default:3.5
    }
},{
    timestamps : true
})

const UserModel = mongoose.model('User',userSchema)

module.exports = UserModel