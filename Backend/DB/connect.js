const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
     .then((e)=>console.log("mongoose connected successfully"))
     .catch((err)=>console.log("mongoose connection failed" , err));
}



module.exports = connectDB;
