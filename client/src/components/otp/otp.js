import React from "react";
import "./otp.css";
import Navbar from "../../components/NavBar/navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";

var qrcode;
function Otp() {
  function generateOTP() {
    const radios = document.querySelectorAll('input[name="payit"]');
    let selectedbtn;
    for (const rb of radios) {
      if (rb.checked) {
        selectedbtn = rb.value;
        break;
      }
    }
    console.log(selectedbtn);
    if (selectedbtn) {
      const otpbox = document.querySelector(".otp-false");
      otpbox.className = "otp-true";
      document.querySelector("#missingotp").innerText = "";
    } else {
      document.querySelector("#missingotp").innerText = "Select payment method";
    }
  }
  const history = useHistory();
  function choosepayment(e) {
    axios
      .get("http://localhost:5000" + "/scan")
      .then(function (response) {
        qrcode = response;
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    const allpayments = document.querySelectorAll(".pay");
    allpayments.forEach((item) => item.classList.remove("show"));
    const mymethod = e.currentTarget.getAttribute("id");
    if (mymethod == "UPI") {
      console.log(qrcode);
      // document.querySelector('#qrcodeimg').src = qrcode;
      // qrimg.src = qrcode;
      document.querySelector("#payupi").classList.add("show");
    } else if (mymethod == "Cash") {
      document.querySelector("#paycash").classList.add("show");
    } else if (mymethod == "AEPS") {
      document.querySelector("#payaeps").classList.add("show");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>Complete Payment</h1>
      </div>
      <div className="maincontainer">
        <div className="left">
          <div className="payoption">
            <input
              type="radio"
              value="UPI"
              id="UPI"
              name="payit"
              onClick={choosepayment}
            />
            <label>UPI</label>
            <div className="pay" id="payupi">
              {/* <img src = '../../../Images/qrcode.jpeg'  id='qrcodeimg'/>
               */}
              <img
                src="data:image/png;base64,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"
                id="qrcodeimg"
              />
            </div>
          </div>

          <div className="payoption">
            <input
              type="radio"
              id="Cash"
              value="Cash"
              name="payit"
              onClick={choosepayment}
            />
            <label>Cash</label>
            <div className="pay " id="paycash">
              CASH
            </div>
          </div>

          <div className="payoption">
            <input
              id="AEPS"
              type="radio"
              value="AEPS"
              name="payit"
              onClick={choosepayment}
            />
            <label>AEPS</label>
            <div className="pay " id="payaeps"></div>
          </div>
        </div>

        <div className="right">
          <div className="generateotp">
            <button className="createotp" onClick={generateOTP}>
              {" "}
              Generate OTP
            </button>
          </div>
          <div id="missingotp"></div>
          <div className="otp-container">
            <div className="otp-false">
              <h4>
                We have sent the OTP on user's mobile number. Please enter below
              </h4>
              <input type="number" placeholder="Enter the OTP" />
              <button className="confirm">Verify OTP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
