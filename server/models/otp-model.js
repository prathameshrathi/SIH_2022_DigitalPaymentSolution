const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    operator_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'OPERATOR'
    },
    number: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 300000 } }

    // After 5 minutes it deleted automatically from the database
}, { timestamps: true })

const Otp=mongoose.model('OTP',otpSchema);
module.exports = Otp;
