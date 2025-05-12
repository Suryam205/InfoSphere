const {Schema , model} = require("mongoose");

const commentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
     contentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    contentType :{
        type: String,
        enum: ["Movie" , "Product" , "Sport"],
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
  } , {timestamps:true}
)