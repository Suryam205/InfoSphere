const express = require("express");
const {Schema , model} = require("mongoose");

const sportsSchema = new Schema({
   name : {
        type: String,
        required: true,
    },
    category: {
        type : String,
        required: true,
    },
    teamName:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description:{
        type: String,
    }
} , {timestamps: true});

const sportsModel = model("sports", sportsSchema);
module.exports = sportsModel;