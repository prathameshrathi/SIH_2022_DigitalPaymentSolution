import Navbar from "../../components/navbar";
import NavBar from '../../components/NavBar/navbar'
import Type from "../../typewriter"
import '../../App'
import Features from "../../Features";
import Footer from "../../components/Footer/footer"
import Profile from "../Profile/Profile";
import Anagram from "../../components/anagram"
import FeaturesH from "../../Features-h";
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from '../../components/NavbarElements';
import typewriter from '../../typewriter'

const Home = () => {
  return (
    <>
   <NavBar/>
      
  

      
      <div id="hero" class="hero overlay">
      
        <div class="hero-content">
        
            <div class="hero-text">


          
		
{/* <div className="links">
		
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Profile' activeStyle>
			Profile
		</NavLink>
		<NavLink to='/Register' activeStyle>
			Login
		</NavLink>
		<NavLink to='/About' activeStyle>
			About Us
		</NavLink>
		
		</div> */}
		
	
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

