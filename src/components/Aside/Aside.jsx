import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
const box = {
  padding: 20,
  height: "50px",
  width: "100%",
  margin: "8px auto",
  backgroundColor: "gray",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const tooltip = {
  padding: 40,
  fontSize: "50px",
};
const avatarStyle = {
  fontSize: "20px",
  cursor: "pointer",
};
const flex = {
  width: "50%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const phon = {
  width: "14%",
  display: "flex",
  alignIitems: "center",
  justifyContent: "space-between",
  // padding: "0px 30px",
  paddingLeft: "50px",
};
const phonN = {
  fontSize: "15px",
  marginLeft: "10px",
};
const Aside = () => {
  return (
    <Paper elevation={10} style={box}>
      <Grid style={flex}>
        <Tooltip title="Facebook" placement="bottom" style={tooltip}>
          <Avatar style={avatarStyle}>
            <SendOutlinedIcon />
          </Avatar>
        </Tooltip>

        <Tooltip title="Facebook" placement="bottom">
          <Avatar style={avatarStyle}>
            <FacebookOutlinedIcon />
          </Avatar>
        </Tooltip>

        <Tooltip title="Facebook" placement="bottom">
          <Avatar style={avatarStyle}>
            <WhatsappOutlinedIcon />
          </Avatar>
        </Tooltip>

        <Tooltip title="Facebook" placement="bottom">
          <Avatar style={avatarStyle}>
            <AccountCircleOutlinedIcon />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid style={phon}>
        <Typography style={phonN}>9813564655465+</Typography>
        <LocalPhoneOutlinedIcon style={avatarStyle} />
      </Grid>
    </Paper>
  );
};
export default Aside;
