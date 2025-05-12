const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/first")
     .then((e)=>console.log("mongoose connected successfully"))
     .catch((err)=>console.log("mongoose connection failed" , err));
}



module.exports = connectDB;
