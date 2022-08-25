import React from 'react'
import "./otp.css"
import Navbar from "../../components/NavBar/navbar";

function Otp() {
    function generateOTP(){
        const radios = document.querySelectorAll('input[name="payit"]');
        let selectedbtn;
        for(const rb of radios){
            if(rb.checked){
                selectedbtn = rb.value;
                break;
            }
        }
        console.log(selectedbtn);
        if(selectedbtn){
            const otpbox  = document.querySelector('.otp-false');
            otpbox.className = 'otp-true';
            document.querySelector('#missingotp').innerText = "";
        }
        else{
            document.querySelector('#missingotp').innerText = "Select payment method";
        }

        
    }

    function choosepayment(e){
        const allpayments = document.querySelectorAll('.pay');
        allpayments.forEach(item=>item.classList.remove('show'))
        const mymethod = e.currentTarget.getAttribute('id');
        if(mymethod == "UPI"){
            document.querySelector('#payupi').classList.add('show');
        }
        else if(mymethod=="Cash"){
            document.querySelector('#paycash').classList.add('show');
        }else if( mymethod == "AEPS"){
            document.querySelector('#payaeps').classList.add('show');
        }

    }
  return (
    <div>
        <Navbar/>
        <div className ="title">
            <h1>Complete Payment</h1>
        </div>
        <div className = "maincontainer">   
            

            <div className = "left">
                <div className = "payoption">
                    <input type="radio" value = "UPI" id = "UPI" name = 'payit' onClick = {choosepayment}/>
                    <label>UPI</label>
                    <div className='pay' id = 'payupi'>
                        <img src ={require('../../Images/header-img.png')} alt='QR COde'/>
                    </div>
                </div>  

                <div className = "payoption">
                    <input type= "radio" id = "Cash" value ="Cash" name = 'payit' onClick={choosepayment} />
                    <label>Cash</label>
                    <div className='pay ' id = 'paycash'>
                        CASH
                    </div>
                </div>     

                <div className = "payoption">    
                    <input id = "AEPS" type='radio' value="AEPS" name = 'payit' onClick={choosepayment}/>
                    <label>AEPS</label>
                    <div className='pay ' id = 'payaeps'>
                    </div>
                </div>
                
            </div>

            <div className='right'>
                <div className = "generateotp">
                    <button className = "createotp" onClick={generateOTP}> Generate OTP</button>
                </div>
                <div id="missingotp"></div>
                <div className ="otp-container">
                    <div className = "otp-false">
                        <h4>We have sent the OTP on user's mobile number. Please enter below</h4>
                        <input type= "number" placeholder = "Enter the OTP" />
                        <button className='confirm'>Verify OTP</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
};

export default Otp;