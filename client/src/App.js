//import ReactDOM from 'react-dom';
//import Login from './Login';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
//import { AccordionButton } from 'react-bootstrap';
import About from './About'
import Home from './Home'
import './App.css';
import Register from './Register';
import React, { Component } from 'react'
import Button from './Button';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register">
            
            <Register />
          </Route>



          <Navbar/>
            


          <Navbar/>
           
            
          
          <Route exact path="/About">
            <About />
          </Route>

        </Switch>
        
      </Router>
      </div>
    )
  }
}






