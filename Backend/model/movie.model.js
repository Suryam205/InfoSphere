const express = require("express")
const {Schema , model} = require("mongoose");

const movieSchema = new Schema({
    movieName: {
        type: String, 
        require : [true, "Movie name is required!!"] //validation
    },
    genre: {
        type: String,
        default: "Other",
    },
    rating: {
        type: Number,
        require : [true, "Movie rating is required!!"] , //validation
        min: 0,
        max: 5,
    },
    releaseDate: {
        type: Date,
    },
    image: {
        type: String, // image URL
        required: [true, "Movie poster URL is required!!"],
    },
    description: {
        type: String, 
        default: " No description available",
    },
   
    }, {
      timestamps: true,
  });



const moviesModel = model("Movies", movieSchema);

module.exports = moviesModel;

