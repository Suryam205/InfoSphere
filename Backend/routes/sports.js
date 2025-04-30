const express = require("express");
const router = express.Router();
const sportsModel = require("../model/sport.model");

router.post("/addSport" , async (req , res)=>{
    const {name , category , teamName , image , description} = req.body;
    if(!name || !category ||  !teamName ||!image ){
        return res.status(400).json({
            success : false,
            message : "fill the all fields properly"
        })
    }
    try{
        const sport = await sportsModel.create({
            name, 
            category,
            teamName,
            image,
            description
        })
        if(!sport){
            return res.status(400).json({
                success: false,
                message: "Sport object is not created"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Sport is created successfully",
            sport: sport
        })


    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.get("/getSports" , async(req, res)=>{
    try{
        const sport = await sportsModel.find({});
        if(!sport){
            return res.status(400).json({
                success: false,
                message : "No Sport data available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Sent Sport Successfully",
            sport: sport,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
    
})

router.delete("/deleteSport" , async(req , res)=>{
    try{
            const sportId = req.query.id;
        if(!sportId){
            return res.status(400).json({
                success: false,
                message: "SportId didn't found"
            })
        }
        const sport = await sportsModel.findById(sportId);
        if(!sport){
            return res.status(400).json({
                success : false,
                message: "Sport Didn't Found"
            })
        }
        await sport.deleteOne();
        return res.status(200).json({
            success: true,
            message: "Sport deleted Successfully"
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

module.exports = router;
