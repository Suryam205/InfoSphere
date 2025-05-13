const mongoose = require("mongoose");
const {Schema , model} = require("mongoose");

const commentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
     contentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    contentType :{
        type: String,
        enum: [ "movie" , "sport" , "product"],
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
  } , {timestamps:true}
)

const commentModel =  model("comment" , commentSchema);
module.exports = commentModel;