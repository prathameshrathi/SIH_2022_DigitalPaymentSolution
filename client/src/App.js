//import ReactDOM from 'react-dom';
//import Login from './Login';
// import Navbar from './components/navbar';
import NavBar from '../src/components/NavBar/navbar'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
//import { AccordionButton } from 'react-bootstrap';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/header';
import Profile from './Pages/Profile/Profile';
import Services from './Pages/Services/services';
import './App.css';
//import Register from './Pages/Register/Register';
import Payment from './Pages/Payment/payment';
import LoginPage from './Pages/Checkout/PersonalInfo';
import Checkout from './Pages/Checkout/Checkout'
import React, { Component } from 'react'
import Button from './Button';
//import Login from './Pages/Register/Login'
import LoginCheckout from './Pages/Checkout/login_checkout';
// import HeaderOne from './demo';




export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/">
          {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet> */}
            <Header />
          </Route>
          {/* <Route exact path="/demo">
            <HeaderOne />
          </Route> */}
          <Route exact path="/register">
            
            <LoginCheckout />
          </Route>
          <Route exact path="/about">
            
            <About />
          </Route>
         
          
          <Route exact path="/checkout">
            
            <Checkout />
          </Route>

          <Route exact path="/login">
            
            <LoginCheckout />
          </Route>
          
          <Route exact path="/Profile">
          <NavBar/>
            <Profile />
          </Route>

          <Route exact path="/services">
          
            <Services />
          </Route>
          <Route exact path="/payment">
          
            < Payment/>
          </Route>



          
            


          
           
            
          
          <Route exact path="/About">
          
            <About />
          </Route>

        </Switch>
        
      </Router>
      </div>
    )
  }
}






