import React, {useState} from "react";
import styled from "styled-components";
//import "../../components/NavBar/navbar.css"
// Components

//import HeaderImage from "../../Images/header-img.png"
import FullButton from "../../components/FullButton"
// Assets
import HeaderImage from "../../Images/aadharheader.webp"
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
// import NavBar from "../../components/NavBar/navbar";
import Footer from '../../components/Footer/footer';
import { Transform } from "@material-ui/icons";
import Navbar from "../../components/Nav/navbar";
import {useHistory} from 'react-router-dom';

export default function Header() {
  const history=useHistory();
    const mystyle = {
        display:"flex",
        justifyContent:"space-between",
        width: "90%",
        margin : "auto",
        fontSize:"1.5rem",
    }
    const mybtn = {
        fontWeight : "500",     
    }
    const func=()=>{
      history.push("/login");
    }
    return (
      <>
      <Navbar/>
        {/* <div style={{display:"flex" , justifyContent : "space-between"}}>
            <a style={{color:"Orange" , fontSize:"2rem"}} href="#" className="nav__brand">
              CodeAspirators
            </a>
          
          
          <a href="/signup">Hi</a>
          
        </div> */}
        
    
        <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
            <div>
                <h1 className="title" style={{fontSize:"40px" , color:"#000"}}>We are Digital Agency.</h1>
                
                <HeaderP className="font13 semiBold" style={{color:"#3d3d29"}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </HeaderP>
                
                
                <button style={{padding:"8px 15px" , backgroundColor: "rgba(255, 123, 35, 0.971)"}} onClick = {func}>Get Started</button> 
                
            </div>
        </LeftSide>
        
        <RightSide>
            <ImageWrapper>
                <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: "-1",width:"80%"}} />
                
            <DotsWrapper>
        
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
    <Footer/>
    </>
  );
}


const Wrapper = styled.section`
  padding-top:70px;
  width: 100%;
  padding-left:10%;
  
  //min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 45%;
  height: 100%;
  margin-left:5%;
  font-size : 15px;
  color: #ff0;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 45%;
  height: 100%;
  margin-right:5%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  background-color: rgba(255, 123, 35, 0.971);

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: -1;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`

  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
