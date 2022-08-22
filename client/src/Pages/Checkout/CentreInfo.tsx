import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CentreInfo() {
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
          />
        </Grid>
       
        
      </Grid>
    </React.Fragment>
  );
}