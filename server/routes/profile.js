const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");

router.get('/profile',authenticate,async (req,res)=>{
    res.send(req.rootUser);
});

