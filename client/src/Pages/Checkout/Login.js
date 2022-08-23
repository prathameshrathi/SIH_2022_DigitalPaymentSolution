import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function LoginPage({setEmail,setPwd}) {
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography> */}
      <Grid container spacing={3}>
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
            label="Password"
            fullWidth
            autoComplete="password"
            variant="standard"
            onChange={(e)=>setPwd(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
