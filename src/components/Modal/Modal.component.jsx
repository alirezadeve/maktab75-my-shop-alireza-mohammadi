import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// /////////////
// import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  // Button,
  // Typography,
  Link,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
// /////////////
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ modalOpen, handleModalClose }) {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };
  const fonstsize = { fonstsize: "large" };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => {
          handleModalClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2 style={btnstyle}> Sign In</h2>
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
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography style={btnstyle}>
              <Link href="#">فراموشی رمز عبور؟</Link>
            </Typography>
            <Typography>
              {" "}
              ایا شما اکانتی دارین ؟<Link href="#">ورود کن جوون</Link>
            </Typography>
          </Paper>
        </Grid>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
