import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonalInfo from "./PersonalInfo";
import CentreInfo from "./CentreInfo";
import Review from "./AccountInfo";
import NavBar from "../../components/NavBar/navbar";
import Navbar from "../../components/Nav/navbar";
import LoginPage from "./Login";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        CodeAspirators
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Login Details"];



const theme = createTheme();

export default function LoginCheckout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <LoginPage 
        setEmail={setEmail} 
          setPwd={setPwd}
          />;
      default:
        throw new Error("Unknown step");
    }
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const history=useHistory();

  const handleClick = (event, role) => {
    var apiBaseUrl = "http://localhost:5000";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    
      var payload = {
        email:email,password:pwd
      };

      // const api=axios.create({
      //   method:'post',
      //   url:apiBaseUrl + "/login",
      //   data:payload,
      //   withCredentials:true
      // })

      axios
        .post(apiBaseUrl + "/login", payload,{withCredentials:true})
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            //  console.log("registration successfull");

            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true,
            });
          } else {
            console.log("some error ocurred", response.status);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        history.push('/services');
    }
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Navbar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Login Details
          </Typography>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/* <Typography variant="h5" gutterBottom>
                  Thank you for submitting the form.
                </Typography> */}
                <Box sx={{ display: "flex" }}>
                  <Button sx={{ mt: 3, ml: 1 }} onClick={handleClick}>Login</Button>
                </Box>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Next" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
