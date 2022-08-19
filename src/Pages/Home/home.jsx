import React from "react";
import Navbar from "../../components/NavBar/navbar";
import './home.css'
import logo from '../../assets/images/payment_illustration.webp'


function Home() {
  return (
    <div>
      <Navbar />
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Home;
