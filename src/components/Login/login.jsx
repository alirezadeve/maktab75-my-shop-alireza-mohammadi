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
  FormHelperText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
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
  /////////////////////////////////////////////////
  // const [addFormData, setAddFormData] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  //   // email: "",
  // });
  const [addFormData, setAddFormData] = useState([]);
  const [validation, setValidation] = useState(true);
  const [pasValidation, setPassValidation] = useState(true);

  const handleAddFormChangeUserName = (event) => {
    event.preventDefault();
    if (
      event &&
      event.target.value.length >= 5 &&
      event.target.value.length <= 8
    ) {
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
      setValidation(true);
    } else {
      setValidation(false);
    }
  };
  const isAnonymous = false;
  const handleAddFormChangePss = (event) => {
    event.preventDefault();
    if (
      event &&
      event.target.value.length >= 5 &&
      event.target.value.length <= 8
    ) {
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);
      setPassValidation(true);
      isAnonymous = true;
    } else {
      setPassValidation(false);
    }
  };
  // const [buttonMode, setbuttonMode] = useState(false);
  // const handelHandelChange = (event) => {
  //   event.preventDefault();
  //   if (
  //     event &&
  //     addFormData.target.value.length >= 5 &&
  //     addFormData.target.value.length <= 8
  //   ) {
  //     setbuttonMode(true);
  //     // event.currentTarget.disabled = true;
  //   }
  // };
  const shod = "mamadi shod";
  const nashod = "nashod";
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
          onChange={handleAddFormChangeUserName}
          // {addFormData.length<10?<label>خیلی کوچیکه</label>:<label>بزرگیش اوکیه</label>}
        />
        {!validation && (
          <FormHelperText
            sx={{ color: "red", fontSize: "10px" }}
            id="component-helper-text"
            // onClick={() => (showErrorMessage.length < 5 ? shod : nashod)}
          >
            Not Valid !!!!!!!!
          </FormHelperText>
        )}
        <TextField
          label="رمز ورود"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={handleAddFormChangePss}
        />
        {!pasValidation && (
          <FormHelperText
            sx={{ color: "red", fontSize: "10px" }}
            id="component-helper-text"
            // onClick={() => (showErrorMessage.length < 5 ? shod : nashod)}
          >
            Not Valid !!!!!!!!
          </FormHelperText>
        )}
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="مرا به یاد بسپار"
        />
        {/* <Link to="/admin"> */}
        {/* {!buttonMode && ( */}
        <Button
          // type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          component={RouterLink}
          to="/admin/products"
          disabled={isAnonymous ? true : false}
        >
          ورود
        </Button>
        {/* )} */}

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
