const jwt = require("jsonwebtoken");
const User = require("../models/operator");
const authenticate = async (req,res,next)=>{
    try{
        // let authHeader = req.headers.authorization;
        // let token;
        let token = req.cookies.OperatorCookie;
        // console.log(token)
        // if(authHeader){
        //     token = authHeader.split(" ")[1];
        // }
        if(!token){
            return res.status(401).json({message:"Unauthorized accessing"});
        }
        console.log("Token->" + token);
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser) throw new Error("Unauthorized");
        
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({message:"Unauthorized access"});
    }
}

module.exports = authenticate;