const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Operator = require('../models/operator');
const moment = require('moment');

router.post('/userdata',async(req,res)=>{
    const {user_name,user_bank,user_uid,user_mob,amount,services} = req.body;
    // if(!user_name || !user_uid || !user_mob || !amount || !services || !user_bank){
    //     return res.status(422).json({message:"User data missing"});
    // }
    // console.log(typeof(moment().format("YYYY-MM-DD HH:mm:ss")));
    res.cookie('userdata',req.body,{
        expires: new Date(Date.now()+3315360000000),
        httpOnly: true,
    });
    console.log(req.body);
    return res.status(200).json(req.body);
});

router.get('/clearuser',authenticate,async (req,res)=>{
    try{
        const data = {
            "user": req.cookies.userdata.user_name,
            "uid": req.cookies.userdata.user_uid,
            "date" : moment().format("YYYY-MM-DD HH:mm:ss"),
            "amount":req.cookies.userdata.amount,
            "services":req.cookies.userdata.services
        }
        const operator = await Operator.findOne({email:req.rootUser.email});
        console.log("From->" + operator);
        operator.generateTransaction(data);
        res.clearCookie('userdata', {path:'/'});
        res.status(200).json({message:"User Data Submitted"});
        }
        catch(err){
            res.send(err);
        }
})


module.exports = router;

