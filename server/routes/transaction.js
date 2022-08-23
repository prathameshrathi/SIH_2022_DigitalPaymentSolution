const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const Operator = require('../models/operator');

router.get('/transactions',authenticate,async(req,res)=>{
    res.send(req.rootUser.transactions);
})

module.exports = router;