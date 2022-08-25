import React, { useState } from "react";
import "./cards.css";
import "../../components/otp/otp";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Cards = () => {
  const cardItems = [
    "Aadhar Enrollment",
    "Mandatory Boimetric Update(MBU)",
    "Biometric Update",
    "Demographic Update",
    "E-Aadhar Download",
  ];


  const userservices = {
    user_name : "",
    user_uid : "",
    user_mob : "",
    user_bank : "",
    ini_services : [0,0,0,0,0],
    services :[],
    amount : 0,
};

  const [items, setItems] = useState({
    ...cardItems.map((item) => {
      return { item, selected: false };
    }),
  });

  function handleClick(e) {
    if ("card-false" == e.currentTarget.className) {
      const idx = e.currentTarget.getAttribute("data-idx");
      const item = e.currentTarget.getAttribute("data-item");
      e.currentTarget.className = "card-true";
      //console.log(idx);
      userservices.ini_services[idx] = 1;

      //setItems({ ...items, [idx]: { item: item, selected: true } });
    } else {
      const idx = e.currentTarget.getAttribute("data-idx");
      const item = e.currentTarget.getAttribute("data-item");
      e.currentTarget.className = "card-false";

      //console.log(idx);
      userservices.ini_services[idx] = 0;
      //setItems({ ...items, [idx]: { item: item, selected: false } });
    }
    /*
    console.log("Array")
    console.log(userservices.ini_services[0]);
    console.log(userservices.ini_services[1]);
    console.log(userservices.ini_services[2]);
    console.log(userservices.ini_services[3]);
    console.log(userservices.ini_services[4]);
    */
  }

  const history = useHistory();
  function handlecost(){

    console.log("Inside function amount");
    const myname = document.querySelector('#userName').value;
    const myphone = document.querySelector('#phoneno').value;
    const myuid= document.querySelector('#user_uid').value;
    const mybankname = document.querySelector('#userName').value;
    const errmsg = document.querySelector('.errormsg');

    if(myname == ""){
      errmsg.innerHTML = "Enter Name";
    }else{
      userservices.user_name = myname;
    }
    console.log(userservices.user_name);
    if(myphone == ""){
      errmsg.innerHTML = "Enter Phone Number";
    }else if(myphone.length != 10){
      errmsg.innerHTML = "Phone number must be 10 digits";
    }
    else{
      userservices.user_mob = myphone;
    }

    if(myuid === ""){
      errmsg.innerHTML = "Enter Aadhar Number";
    }else if(myuid.length != 12){
      errmsg.innerHTML = "Enter valid aadhar number";
    }
    else{
      userservices.user_uid = myuid;
    }

    if(userservices.ini_services[0] == 1){
      userservices.amount += 0;
      userservices.services.push(0);
    }
    if(userservices.ini_services[1] == 1){
      userservices.amount += 0;
      userservices.services.push(1);
    }
    if(userservices.ini_services[2] == 1){
      userservices.amount += 100;
      userservices.services.push(2);
    }
    if(userservices.ini_services[3] == 1){
      userservices.amount += 50;
      userservices.services.push(3);
    }
    if(userservices.ini_services[4] == 1){
      userservices.amount += 30;
      userservices.services.push(4);
    }
    /*
    console.log(userservices.services[0]);
    console.log(userservices.services[1]);
    console.log(userservices.services[2]);
    console.log(userservices.services[3]);
    console.log(userservices.services[4]);
    console.log(userservices.amount);
    */
   console.log("Just before");
   axios.post("http://localhost:5000" + "/userdata", userservices)
        .then(function (response) {
          if(response.status==200){
            history.push('/verify');
          }
          else{
            alert("Details invalid");
          }
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });  
  }

  function handleSubmit() {
    console.log(items);
  }
  return (
    <div className="Main-container">
      <div className = "UserInfo">
        <h1>User Details</h1>

        <div className = "userdetails" id="Username">
          <label>Name: </label>
          <input className='textfield'
            required
            id = "userName"
            placeholder="Full Name"
            //onChange = {(event,newValue) => this.setState({first_name:newValue})}
          />
        </div>
        
        <div className = "userdetails" id="phone">
          <label>Phone Number:</label>
          <input className='textfield'
            required
            id = "phoneno"
            placeholder= "Phone Number"
            //onChange = {(event,newValue) => this.setState({first_name:newValue})}
          />
        </div>

        <div className = "userdetails" id="Username">
          <label>Aadhar No:</label>
          <input 
            className='textfield'
            required
            id = "user_uid"
            placeholder= "Aadhar Number"
            //onChange = {(event,newValue) => this.setState({first_name:newValue})}
          />
        </div>

        <div className="userdetails">
          <label>Bank Name:</label>
          <input className='textfield'
            required
            id = "bankname"
            placeholder= "Bank"
            //onChange = {(event,newValue) => this.setState({first_name:newValue})}
          />
        </div>

      </div>

      <div className="ini_services"><h1>Services</h1></div>
      <div className="card-container">
        
            <div
              className="card-false"
              id= "C1"
              onClick={handleClick}
              data-item= "Aadhar Enrollment"
              data-idx="0"
            >
              <h1>Aadhar Enrollment</h1>
              <img src = {require("../../Pages/Services/AadharEnrollment.jpeg")} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button onClick={handleSubmit}> Select</button>
            </div>

            <div
              className="card-false"
              id= "C2"
              onClick={handleClick}
              data-item= "Mandatory Boimetric Update(MBU)"
              data-idx="1"
            >
              <h1>Mandatory Boimetric Update(MBU)</h1>
              <img src = {require("../../Pages/Services/MUB.jfif")} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button onClick={handleSubmit}> Select</button>
            </div>

            <div
              className="card-false"
              id= "C3"
              onClick={handleClick}
              data-item= "Biometric Update"
              data-idx="2"
            >
              <h1>Biometric Update</h1>
              <img src = {require("../../Pages/Services/biometricupdate.jfif")} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button onClick={handleSubmit}> Select</button>
            </div>

            <div
              className="card-false"
              id= "C4"
              onClick={handleClick}
              data-item= "Demographic Update"
              data-idx="3"
            >
              <h1>Demographic Update</h1>
              <img src = {require("../../Pages/Services/demographicupdate.jfif")} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button onClick={handleSubmit}> Select</button>
            </div>

            <div
              className="card-false"
              id= "C5"
              onClick={handleClick}
              data-item= "E-Aadhar Download"
              data-idx="4"
            >
              <h1>E-Aadhar Download</h1>
              <img src = {require("../../Pages/Services/edownload.jfif")} />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <button onClick={handleSubmit}>Select</button>
            </div>
      </div>
      <p className = "errormsg"></p>
      <button onClick={handlecost} > Proceed to Pay</button>;
    </div>
  );
};


function Card(props) {
  const classnamex = "card" + props.props.selected;
  return <div className={classnamex}>{props.props.item}</div>;
}
export default Cards;