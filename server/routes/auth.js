const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Operator = require("../models/operator");
const authenticate = require("../middleware/authenticate");

router.post('/signup',async (req,res)=>{
    const {name,email,mobile,upiId,uid,password,cpassword} = req.body;
    if(!validEmail(email) || !validMob(mobile) || !validUpi(upiId) ||!validUid(uid)){
        return res.status(422).json({message:"Details invalid!!"})
    }; 
    // console.log(name);
    try{
    const exists = await Operator.findOne({email:email})
    if(exists) return res.status(422).json({message:"Operator already exists!"});
    const operator = new Operator(req.body);
    await operator.save(req.body);
    res.json({message:"Registered Successfully"});
    }
    catch(err){
        // console.log(err);
        res.send(err);
    }
});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    try{
    const operatorFound = await Operator.findOne({email:email});
    if(!operatorFound) return res.json({message:"Not registered"});
    else{
        const isMatch = await bcrypt.compare(password,operatorFound.password);
        const token = operatorFound.generateAuthToken();
        res.cookie("OperatorCookie",token,{
            expires: new Date(Date.now()+3315360000000),
            httpOnly: true
        })
        if(!isMatch){
            res.status(422).json({message:"Incorrect password"});
        }
        else{
            res.status(200).json({message:"Logged in successfully"});
        }
    }
    }
    catch(err){
        // console.log(err);
        res.send(err);
    }
});

router.get('/profile',authenticate,async (req,res)=>{
    res.send(req.rootUser);
});

router.get('/logout',(req,res)=>{
    res.clearCookie('OperatorCookie', {path:'/login'});
    res.status(200).send("User Logout");
});

function validEmail(email){
    if(email===null) return false;
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    return regex.test(email);
}

function validMob(mob){
    if(mob===null) return false;
    return mob.toString().length===10;
}

function validUpi(upiId){
    if(!upiId) return false;
    let regex = new RegExp("([a-zA-Z0-9\.\-]\@[a-zA-Z][a-zA-Z])");
    return regex.test(upiId);
}

function validUid(uid){
    if(uid===null) return false;
    return uid.toString().length===12;
}


module.exports = router;