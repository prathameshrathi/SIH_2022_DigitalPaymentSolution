import Navbar from "./components/navbar";
import Footer from './footer'
import "./About.css" 
const App = () => {
    return (
      <>
     
      <Navbar/>
        <div  id="aboutuspage">
        
        <div id="our-team">

        <h2 class="OurTeam">Our Team</h2>

        <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              
              <h3>Rutvij</h3>
              <p>ML and Blockchain Enthusiast</p>
              <a href="https://www.linkedin.com/in/rutvij-wamanse-b7b7101a2/">Read More</a>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="box">
            <div class="content">
              
              <h3>Saachi</h3>
              <p>Web Developer and ML Enthusiast</p>
              <a href="https://www.linkedin.com/in/saachi-bang-a4b0291b0/">Read More</a>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              
              <h3>Tushuli</h3>
              <p>Web Developer and ML Enthusiast</p>
              <a href="https://www.linkedin.com/in/tushuli-patil-aa00b61a1/">Read More</a>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="box">
            <div class="content">
              
              <h3>Janvi</h3>
              <p>Web Developer and ML Enthusiast</p>
              <a href="https://www.linkedin.com/in/janvi-santani-6a44b91ab/">Read More</a>
            </div>
          </div>
        </div>
      </div>
        
        <Footer/>
        </div>
        </div>
       
        </>
      );
    };
    
    export default App;