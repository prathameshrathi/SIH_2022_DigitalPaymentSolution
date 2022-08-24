import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { modalUnstyledClasses } from '@mui/material';

// let data = {
//   "name":"Pratham"
// }
// export {data};
 const PersonalInfo = ({setName,setLname,setEmail,setMobile,setPwd,setRepwd}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" fontSize = "20px" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item  xs={12} sm={6} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e)=>setName(e.target.value)}
          
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e)=>setLname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mobileno"
            name="mobileno"
            label="Mobile No"
            fullWidth
            autoComplete="Mobile No."
            variant="standard"
            onChange={(e)=>setMobile(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email Id"
            fullWidth
            autoComplete="Email Id"
            variant="standard"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Enter Password"
            fullWidth
            autoComplete="Password"
            variant="standard"
            onChange={(e)=>setPwd(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            id="confirm_password"
            name="confirm_password"
            label="Re-enter password"
            fullWidth
            variant="standard"
            onChange={(e)=>setRepwd(e.target.value)}
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default PersonalInfo;