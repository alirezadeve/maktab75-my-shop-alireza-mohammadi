import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import Tooltip from "@mui/material/Tooltip";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";
const box = {
  padding: 20,
  height: "50px",
  width: "100%",
  margin: "8px auto",
  backgroundColor: "gray",
  display: "flex",
  alignItems: "center",
};
const tooltip = {
  padding: 40,
  fontSize: "50px",
};
const avatarStyle = {
  fontSize: "large",
  cursor: "pointer",
};
const flex = {
  width: "50%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
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
            <InsertLinkOutlinedIcon />
          </Avatar>
        </Tooltip>

        <Tooltip title="Facebook" placement="bottom">
          <Avatar style={avatarStyle}>
            <WhatsappOutlinedIcon />
          </Avatar>
        </Tooltip>

        {/* <h2> Sign In</h2> */}
      </Grid>
    </Paper>
  );
};
export default Aside;
