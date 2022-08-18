import Navbar from "./components/navbar";
import Type from "./typewriter"
import './App.css';
import Features from "./Features";
import Footer from "./footer"
import Anagram from "./anagram"
import FeaturesH from "./Features-h";
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './components/NavbarElements';
import typewriter from './typewriter'

const Home = () => {
  return (
    <>
   
      
  

      
      <div id="hero" class="hero overlay">
      
        <div class="hero-content">
        
            <div class="hero-text">
          
		
<div className="links">
		
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/PatientList' activeStyle>
			Services
		</NavLink>
		<NavLink to='/Register' activeStyle>
			Login
		</NavLink>
		<NavLink to='/About' activeStyle>
			About Us
		</NavLink>
		
		</div>
		
	
                <h1 id="medchain">CodeAspirators</h1>
                
                <Type/>
                
            </div>
        </div>
    </div>
            
        
       
      
      
      <FeaturesH/>
       <Footer/>
       </>
     
  );
}

export default Home;

