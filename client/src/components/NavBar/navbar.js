import React, { useState } from "react";
import "./navbar.css";


function Navbar() {
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

      <a href="#" className="nav__brand">
        CodeAspirators
      </a>
      <a href="/" className="nav__brand">
        herdoy

      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
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

          <a href="/Profile" className="nav__link">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About Us
          </a>
        </li>
        
        <li className="nav__item">
          <a href="/checkout" className="nav__link">
            Sign Up
          </a>
        </li>
        <li className="nav__item">
          <a href="/login_checkout" className="nav__link">
            LogIn
          </a>
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
