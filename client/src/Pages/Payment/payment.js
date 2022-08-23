import React, { Component, useState } from "react";
import "./payment.css";
import NavBar from '../../components/NavBar/navbar';
import Footer from "../../components/Footer/footer";
const Payment = () => {
  const [avatarImageURL, setAvatar] = useState();
  const [selected, setSelected] = useState("biff");
  let itemList = ["Gpay", "Paytm", "Paypal", "Visa", "MasterCard"];

  function onChangeValue(e) {
    setSelected(e.target.value);
  }
  function handleSubmit() {
    console.log(selected);
  }
  return (
    <div>
        <NavBar/>
        
    
    <div className="payment-container">
      <div className="button-container" onChange={onChangeValue}>
        {itemList.map((item, i) => {
          return (
            <div className="itemname">
              <input name="avatar" id={item} type="radio" value={item} />
              <label className="button-label" htmlFor={item}>
                <div className="button-component">{item}</div>
              </label>
            </div>
          );
        })}
      </div>
      <button onClick={handleSubmit}> Submit </button>
    </div>
    <Footer/>

    </div>
  );
};

export default Payment;
