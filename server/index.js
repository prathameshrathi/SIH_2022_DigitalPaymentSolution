const express = require('express');
require("dotenv").config();
const db = require('./config/db');
const port = process.env.PORT;
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const auth = require('./routes/auth');

// const otp = require('./routes/otp');
app.use(auth);
// app.use(otp);

const user = require('./routes/user');
const modes = require('./routes/modes');
const transaction = require('./routes/transaction');
app.use(auth);
app.use(user);
app.use(modes);
app.use(transaction);
app.use(express.json({extended:true}));

app.use('/',(req,res)=>{
    res.send("Server created");
})

const mid = (req,res,next) =>{
    
}

app.listen(port,()=>{
    console.log("Listening on port 5000");
})

