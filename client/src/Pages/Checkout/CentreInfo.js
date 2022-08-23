import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const PaymentForm = ({setCity,setAddress,setPincode}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Centre Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="city"
            label="City"
            fullWidth
            autoComplete="city"
            variant="standard"
            onChange={(e)=>setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="address"
            label="Centre Address"
            fullWidth
            autoComplete="address"
            variant="standard"
            onChange={(e)=>setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="pincode"
            label="Pin Code"
            fullWidth
            autoComplete="pincode"
            variant="standard"
            onChange={(e)=>setPincode(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember centre details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;