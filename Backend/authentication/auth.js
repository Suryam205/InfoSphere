const JWT = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

function createTokenForUser(user){
    const payload = {
        _id : user._id,
        fullName:user.fullName,
        email: user.email,
        
    };
    const token = JWT.sign(payload , secret);
    return token;
}



module.exports={
    createTokenForUser,
    
}

