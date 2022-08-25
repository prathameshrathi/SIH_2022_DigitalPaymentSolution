const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const authenticate = require('../middleware/authenticate');

router.post('/cash',authenticate,(req,res)=>{

})

router.get('/scan',authenticate,function (req, res) {
    // QRCode.toString("upi://pay?pa="+req.rootUser.upiId+"&pn=Prathamesh%20Hariprasad%20Rathi&mc=0000&mode=02&purpose=0&am=100", { type: 'terminal' },
    //     function (err, code) {

    //         if (err) return console.log("error occurred")

    //         // console.log(code)
    //     });

    // To display qrcode in string format
    //pa:vpa
    //pn:payee name
    //
    const api_url = "upi://pay?pa="+req.rootUser.upiId+"&pn="+req.rootUser.fname+"%20"+req.rootUser.lname+"&mc=0000&mode=02&purpose=0&am="+req.cookies.userdata.amount;
    QRCode.toDataURL(api_url, function (err, code) {
        if(err){
            return res.status(422).json({message:"Could not get qrcode"});
        }
        return res.status(200).send(code);
    })
})


router.post('aeps',authenticate,(req,res)=>{

})

module.exports = router;