const express = require("express");
const commentModel = require("../model/comment.model");

const router = express.Router();

router.post("./addComment" , async(req , res)=>{
    try{
        const {user , contentId ,contentType ,text} = req.body;
        if (user==="" || contentId==="" || contentType==="" || text===""){
            return res.status(401).json({
                success: false,
                message: "comment required fields are empty"
            })
        }
        const comment = await commentModel.create({
            user , 
            contentId,
            contentType,
            text,
        })
        if(!comment){
            return res.status(401).json({
                success: false,
                message: "Error while creating comment"
            }) 
        }
        return res.status(200).json({
            success: true,
            message: "Comment successfully created"
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Internal server Error",
            
        })
    }

})