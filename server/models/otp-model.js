const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
<<<<<<< HEAD
=======
    operator_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'OPERATOR'
    },
>>>>>>> c7a8ff421c402210180249e49107ce9905e48c71
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

<<<<<<< HEAD
const Otp = mongoose.model('OTP',otpSchema);
=======
const Otp=mongoose.model('OTP',otpSchema);
>>>>>>> c7a8ff421c402210180249e49107ce9905e48c71
module.exports = Otp;
