const express = require("express");
const commentModel = require("../model/comment.model");

const router = express.Router();

router.post("/addComment" , async(req , res)=>{
    try{
        const {userId , contentId ,contentType ,text} = req.body;
        if (!userId || !contentId || !contentType || !text){
            return res.status(401).json({
                success: false,
                message: "comment required fields are empty"
            })
        }
        const comment = await commentModel.create({
            userId , 
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
            message: "Comment successfully created",
            comment: comment
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Internal server Error",
            
        })
    }

})

router.get("/getComments" , async(req , res)=>{
    try{
            const {contentId , contentType} = req.query;

        if(!contentId || !contentType){
            return res.status(400).json({
                success: false,
                message: "Missing contentId or contentType"
            });
        }

        const comments = await commentModel
                        .find({contentId , contentType})
                        .sort({createdAt: -1})
                        .populate("userId" , "fullName");
        
        if(!comments){
            return res.status(400).json({
            success: false,
                message: "Missing contentId or contentType"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Comments fetched successfully",
            comments: comments
        });

      }catch(err){
        console.error("Error in getComments:" , err);
         return res.status(500).json({
            success: false,
            message: "Internal server error"
         });
      }

})

module.exports = router;