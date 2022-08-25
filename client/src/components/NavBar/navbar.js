import React, { useState } from "react";
import "./navbar.css";
import axios from 'axios';
import { Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom';


function Navbar() {
  const history=useHistory();

  
function logOut(){
  const data = {};
  axios
        .post("http://localhost:5000" + "/logout", data)
        .then(function (response) {
          // console.log(response);
          if (response.status === 200) {
            //  console.log("registration successfull");

            // var loginmessage = "Not Registered yet.Go to registration";
            // self.props.parentContext.setState({
            //   loginmessage: loginmessage,
            //   buttonLabel: "Register",
            //   isLogin: true,
            // });
          } else {
            // console.log("some error ocurred",+ response.status);
          }
        })
        .catch(function (error) {
          // console.log(error);
        });
        history.push("/");
}

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        CodeAspirators
      </a>
      <ul className={active}>
       
        <li className="nav__item">
          <a href="/services" className="nav__link">
            Services
          </a>
        </li>

        <li className="nav__item">
          <a href="/payment" className="nav__link">
            Transaction History
          </a>
        </li>



        <li className="nav__item">
          {/* <a href="/" className="nav__link" onClick={logOut}>
          
            Logout
          </a> */}

          <Button onClick={logOut}>Logout</Button>

        </li>

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
