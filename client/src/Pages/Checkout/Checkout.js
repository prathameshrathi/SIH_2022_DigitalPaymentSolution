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
import axios from "axios";
import Review from "./AccountInfo";
import NavBar from "../../components/NavBar/navbar";

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

const steps = ["Personal Details", "Centre Details", "Account Details"];

// function getStepContent(step) {

//   switch (step) {
//     case 0:
//       return <PersonalInfo />;
//     case 1:
//       return <CentreInfo />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [name, setName] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [aadhar, setAadhar] = React.useState("");
  const [upi, setUpi] = React.useState("");
  // const [mob, setMob] = React.useState("");

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            setName={setName}
            setLname={setLname}
            setMobile={setMobile}
            setEmail={setEmail}
            setPwd={setPwd}
            //setRepwd={setRepwd}
          />
        );

      case 1:
        return (
          <CentreInfo
            setCity={setCity}
            setAddress={setAddress}
            setPincode={setPincode}
          />
        );
      case 2:
        return <Review setAadhar={setAadhar} setUpi={setUpi}/>;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleClick = (event, role) => {
    console.log(name);
    var apiBaseUrl = "http://localhost:5000";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    if (name.length > 0 && lname.length > 0 && mobile.length === 10 && email.length > 0 && aadhar.length === 12) {
      var payload = {
        fname:name,lname:lname,address:address,email:email,mobile:mobile,upiId:upi,uid:aadhar,city:city,pincode:pincode,password:pwd
        // "lname":this.state.last_name,
        //"email":this.state.email,
        // "pwd":this.state.password,
      };
      axios
        .post(apiBaseUrl + "/signup", payload)
        .then(function (response) {
          console.log(response);
          if (response.data.code === 200) {
            //  console.log("registration successfull");

            var loginmessage = "Not Registered yet.Go to registration";
            self.props.parentContext.setState({
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true,
            });
          } else {
            console.log("some error ocurred", response.data.code);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Input field value is missing");
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
      <NavBar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Register Yourself
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                {/* <Typography variant="h5" gutterBottom> */}
                  <Button onClick={handleClick}>Submit</Button>
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                {/* </Typography> */}
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
