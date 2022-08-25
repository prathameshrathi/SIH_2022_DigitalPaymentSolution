const express = require('express');
const router = express.Router();
const otpGenerator = require('otp-generator');
const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const authenticate = require("../middleware/authenticate");
const Otp = require('../models/otp-model');

router.get('/otp',async (req,res)=>{
    const OTP = otpGenerator.generate(6, {
        digits: true, upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false
    });
    const number = "1234567890";
    const greenwebsms = new URLSearchParams();
    // greenwebsms.append('token', '05fa33c4cb50c35f4a258e85ccf50509');
    // greenwebsms.append('to', `+${number}`);
    // greenwebsms.append('message', `Verification Code ${OTP}`);
    // axios.post('http://api.greenweb.com.bd/api.php', greenwebsms).then(response => {
    //     // console.log(response.data);
    // });
    const otp = new Otp({ number: number, otp: OTP });
    console.log(OTP);
    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    console.log(otp);
    return res.status(200).send("Otp send successfully!");

    // res.send(req.rootUser);
});

router.get('/verifyotp',authenticate,async (req,res)=>{
    
});

module.exports = router;