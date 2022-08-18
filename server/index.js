const express = require('express');
require("dotenv").config();
const db = require('./config/db');
const port = process.env.PORT;
const app = express();
app.use(express.json());
const auth = require('./routes/auth');
app.use(auth);
app.use('/',(req,res)=>{
    res.send("Server created");
})

const mid = (req,res,next) =>{

}

app.listen(port,()=>{
    console.log("Listening on port 5000");
})

