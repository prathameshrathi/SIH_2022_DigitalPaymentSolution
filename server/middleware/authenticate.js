const jwt = require("jsonwebtoken");
const User = require("../models/operator");
const authenticate = async (req,res,next)=>{
    try{
    const token = req.cookies.Operatortoken;
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
    if(!rootUser) throw new Error("Unauthorized");
    // req. 
    }
    catch(err){
        res.status(401).send("Unauthorized access");
    }
}

module.exports = authenticate;