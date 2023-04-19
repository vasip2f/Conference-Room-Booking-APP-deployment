const mongoose = require('mongoose') 
const connection = mongoose.createConnection("mongodb+srv://calendar:calendar@calendar.hikmumx.mongodb.net/test")

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:false},
    googleId:{type:String,required:false},
    id:{type:String}

})
const signupUser = connection.model("signupUser",userSchema)
module.exports= signupUser