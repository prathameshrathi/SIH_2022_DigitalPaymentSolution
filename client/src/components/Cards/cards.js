import React, { useState } from "react";
import "./cards.css";
import "../../components/otp/otp";
import { useHistory } from "react-router-dom";

const Cards = () => {
  const cardItems = [
    "Aadhar Enrollment",
    "Mandatory Boimetric Update(MBU)",
    "Biometric Update",
    "Demographic Update",
    "E-Aadhar Download",
  ];


  const userservices = {
    username : "",
    aadharno : "",
    mobileno : "",
    bankno : "",
    services : [0,0,0,0,0],
    finalservices :[],
    cost : 0,
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
      userservices.services[idx] = 1;

      //setItems({ ...items, [idx]: { item: item, selected: true } });
    } else {
      const idx = e.currentTarget.getAttribute("data-idx");
      const item = e.currentTarget.getAttribute("data-item");
      e.currentTarget.className = "card-false";

      //console.log(idx);
      userservices.services[idx] = 0;
      //setItems({ ...items, [idx]: { item: item, selected: false } });
    }
    /*
    console.log("Array")
    console.log(userservices.services[0]);
    console.log(userservices.services[1]);
    console.log(userservices.services[2]);
    console.log(userservices.services[3]);
    console.log(userservices.services[4]);
    */
  }

  const history = useHistory();
  function handlecost(){

    console.log("Inside function cost");
    const myname = document.querySelector('#userName');
    const myphone = document.querySelector('#phoneno');
    const myaadharno= document.querySelector('#aadharno');
    const mybankname = document.querySelector('#userName');
    const errmsg = document.querySelector('.errormsg');

    if(myname == ""){
      errmsg.innerHTML = "Enter Name";
    }else{
      userservices.username = myname;
    }

    if(myphone == ""){
      errmsg.innerHTML = "Enter Phone Number";
    }else if(myphone.length != 10){
      errmsg.innerHTML = "Phone number must be 10 digits";
    }
    else{
      userservices.mobileno = myphone;
    }

    if(myaadharno === ""){
      errmsg.innerHTML = "Enter Aadhar Number";
    }else if(myaadharno.length != 12){
      errmsg.innerHTML = "Enter valid aadhar number";
    }
    else{
      userservices.aadharno = myaadharno;
    }

    if(userservices.services[0] == 1){
      userservices.cost += 0;
      userservices.finalservices.push(0);
    }
    if(userservices.services[1] == 1){
      userservices.cost += 0;
      userservices.finalservices.push(1);
    }
    if(userservices.services[2] == 1){
      userservices.cost += 100;
      userservices.finalservices.push(2);
    }
    if(userservices.services[3] == 1){
      userservices.cost += 50;
      userservices.finalservices.push(3);
    }
    if(userservices.services[4] == 1){
      userservices.cost += 30;
      userservices.finalservices.push(4);
    }
    /*
    console.log(userservices.finalservices[0]);
    console.log(userservices.finalservices[1]);
    console.log(userservices.finalservices[2]);
    console.log(userservices.finalservices[3]);
    console.log(userservices.finalservices[4]);
    console.log(userservices.cost);
    */
   console.log("Just before");
    history.push("/verify");
    
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
            id = "aadharno"
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

      <div className="services"><h1>Services</h1></div>
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

