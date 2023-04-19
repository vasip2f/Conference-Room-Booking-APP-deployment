
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const userRoute = require("./Routes/UserRoute");
const signup = require('./Routes/user')
const EventRoute = require('./Routes/EventRoutes')
const cors=require("cors");
// const signIn = require("./controller/signin");
const logIn = require("./Routes/signin");
const googleSign = require("./Routes/googleSignIn");
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',signup)
app.use('/',logIn)
app.use('/',googleSign)
app.use(bodyParser.json());
app.use('/', EventRoute)


const MONGO_URL = 'mongodb+srv://calendar:calendar@calendar.hikmumx.mongodb.net/?retryWrites=true&w=majority'
 
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
   app.listen(5000, () => console.log("App is connected to port 5000 "))
}).catch((err) => {
  console.log("Db not connected")
})
