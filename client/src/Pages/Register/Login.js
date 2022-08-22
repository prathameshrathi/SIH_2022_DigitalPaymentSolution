import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer/footer';
import '../../App.css'

function App() {

    return(
      <>
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Username" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Password" />
</div>
 <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
 <div className="message">
<div><input type="checkbox" /> Remember ME</div>
 <div><a href="#">Forgot your password</a></div>
 </div>
   </form>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </div>

        <div>
        <Footer />
        </div>
       </div>   
       </>
    );
  }



export default App;