const express = require("express");
const {Schema, model} = require("mongoose");

const shoppingSchema = new Schema({
    productName: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
      },
      brand: {
        type: String,
        required: [true, "Brand is required"],
        trim: true,
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Unisex"],
        required: [true, "Gender is required"],
      },
      price: {
        type: Number,
        required: [true, "Price is required"],
      },
      image: {
        type: String, // URL of the product image
        required: [true, "Image URL is required"],
      },
      rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
     
} , {timestamps:true});

const shoppingModel = model("Shopping", shoppingSchema);
module.exports = shoppingModel;