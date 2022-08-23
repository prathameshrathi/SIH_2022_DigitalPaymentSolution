const express = require('express');
const router = express.Router();
var QRCode = require('qrcode');

router.get('/scan', function (req, res) {
    // QRCode.toString("upi://pay?pa="+req.rootUser.upiId+"&pn=Prathamesh%20Hariprasad%20Rathi&mc=0000&mode=02&purpose=0&am=100", { type: 'terminal' },
    //     function (err, code) {

    //         if (err) return console.log("error occurred")

    //         // console.log(code)
    //     });

    // To display qrcode in string format
    QRCode.toDataURL("upi://pay?pa="+req.rootUser.upiId+"&pn="+req.rootUser.name+"i&mc=0000&mode=02&purpose=0&am=100", function (err, code) {
        if (err) return console.log("error occurred")
        // console.log(code)
    })
})
