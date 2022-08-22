//import ReactDOM from 'react-dom';
//import Login from './Login';
// import Navbar from './components/navbar';
import NavBar from '../src/components/NavBar/navbar'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
//import { AccordionButton } from 'react-bootstrap';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Services from './Pages/Services/services';
import './App.css';
import Register from './Pages/Register/Register';
import Payment from './Pages/Payment/payment';
import Checkout from './Pages/Checkout/Checkout'
import React, { Component } from 'react'
import Button from './Button';
import Login from './Pages/Register/Login'
// import HeaderOne from './demo';




export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/demo">
            <HeaderOne />
          </Route> */}
          <Route exact path="/Register">
            
            <Register />
          </Route>
          <Route exact path="/about">
            
            <About />
          </Route>
          <Route exact path="/checkout">
            
            <Checkout />
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






