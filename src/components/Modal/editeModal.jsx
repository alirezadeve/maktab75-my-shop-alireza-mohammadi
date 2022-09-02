import * as React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// /////////////

import { Grid, Paper } from "@mui/material";

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

export default function editeModal({ open, handleClose }) {
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
        open={open}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Typography variant="h4" gutterBottom>
              ایا از اطلاعات وارد شده اطمینان دارین
            </Typography>
            <Button
              onClick={handleClose}
              color="secondary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              بلی
            </Button>
            <Button
              onClick={handleClose}
              color="secondary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              خیر
            </Button>
          </Paper>
        </Grid>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
