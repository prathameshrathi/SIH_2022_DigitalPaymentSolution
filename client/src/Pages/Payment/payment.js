import React, { Component, useState } from "react";
import "./payment.css";
import NavBar from '../../components/NavBar/navbar';
import Footer from "../../components/Footer/footer";
const Payment = () => {
  //const [avatarImageURL, setAvatar] = useState();
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
        <h2>No current transactions</h2>
    </div>
  );
};

export default Payment;
