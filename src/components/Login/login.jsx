import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  // Link,
  Checkbox,
  Link,
  Box,
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
  const btnstyle = {
    margin: "20px 0",
    height: "50px",
    fontSize: "large",
    textDecoration: "none",
  };
  const linkstyle = { margin: "20px 0", textDecoration: "none" };
  const fonstsize = { fontSize: "large", textDecoration: "none" };
  const fonstsize2 = { textDecoration: "none" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2 style={linkstyle}> فرم ورودی</h2>
        </Grid>
        <TextField
          label="نام کاربری"
          placeholder="نام کاربری"
          fullWidth
          required
        />
        <TextField
          label="رمز ورود"
          placeholder="Enter password"
          type="رمز ورود"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="مرا به یاد بسپار"
        />
        {/* <Link to="/admin"> */}
        <Button
          // type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          component={RouterLink}
          to="/admin"
        >
          ورود
        </Button>
        {/* </Link> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography style={fonstsize} component={RouterLink} to="/">
            فراموشی رمز عبور؟
          </Typography>
          <Typography style={fonstsize2} component={RouterLink} to="/">
            ایا شما اکانتی دارین ؟ کن جوون
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Login;
