const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { fullName, email, password , role } = req.body;
    if (!fullName || !email || !password || !role) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields",
        });
    }
    try {
        const user = await userModel.create({
             fullName,
              email, 
              password,
              role
         });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not created",
            });
        }
        
    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
    return res.status(200).json({
        success: true,
        password:password,
        message: "User created successfully",
    });

})

router.post("/signin", async (req , res)=>{
    const {email , password , role} = req.body;
    if(!email || !password || !role){
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields",
        });
    }

    
    try {
    const token = await userModel.matchPasswordAndGenerateToken(email, password, role);

    return res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    }).status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (err) {
    console.error("Sign-in error:", err.message);

    return res.status(401).json({
      success: false,
      message: err.message || "Authentication failed",
    });
  }
    

})

router.get("/logout", async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
    }).status(200).json({
        success: true,
        message: "User logged out successfully",
    });
});

router.get("/verify", async (req, res) => {
    
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        if(decoded){
            return res.status(200).json({
                success: true,
                message: "User verified successfully",
            });
        }
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }
});

router.get("/getUserRole" , async(req , res)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Can't Fetch Token"
            })
        }
        const decode =  jwt.verify(token , process.env.JWT_SECRET);
        if(!decode){
            return res.status(201).json({
                success: false,
                message: "Error while decoding"
            })
        }
        const user = await userModel.findById(decode._id);
        if(!user){
            return res.status(201).json({
                success: false,
                message: "No User Found"
            })
        }
        return res.status(200).json({
            success: true,
            message:"userRole fetched successfully",
            role: user.role
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message:error.message,
            
        })
    }
})

router.get("/getUser" , async(req , res)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Can't Fetch Token"
            })
        }
        const decode =  jwt.verify(token , process.env.JWT_SECRET);
        if(!decode){
            return res.status(201).json({
                success: false,
                message: "Error while decoding"
            })
        }
        const user = await userModel.findById(decode._id);
        if(!user){
            return res.status(201).json({
                success: false,
                message: "No User Found"
            })
        }
        return res.status(200).json({
            success: true,
            message:"userRole fetched successfully",
            user: user
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message:error.message,
            
        })
    }
})

module.exports = router;
