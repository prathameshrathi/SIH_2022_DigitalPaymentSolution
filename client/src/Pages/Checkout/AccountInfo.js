import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const AccountInfo = ({setAadhar,setUpi}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Details
      </Typography>
      
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="aadharNo"
            name="aadharNo"
            label="Aadhar No."
            fullWidth
            autoComplete="Aadhar Number"
            validations={["required","min:12"]}
            variant="standard"
            onChange={(e)=>setAadhar(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="upi_id"
            name="upi_id"
            label="UPI Id"
            fullWidth
            autoComplete="UPI Id"
            variant="standard"
            onChange={(e)=>setUpi(e.target.value)}
          />
        </Grid>
        
        
      </Grid>
    </React.Fragment>
  );
}

export default AccountInfo;