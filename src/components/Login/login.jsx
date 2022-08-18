import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  // Link,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0", height: "50px", fontSize: "large" };
  const linkstyle = { margin: "20px 0" };
  const fonstsize = { fonstsize: "large" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2 style={linkstyle}> Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Link to="/admin">
          <Button
            // type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </Link>
        <Typography style={btnstyle}>
          <Link to="/">فراموشی رمز عبور؟</Link>
        </Typography>
        <Typography>
          {" "}
          ایا شما اکانتی دارین ؟<Link to="/">ورود کن جوون</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
