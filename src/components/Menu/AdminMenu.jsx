// import React from "react";
import "../../assets/styles/components/Menu/Menu.scss";
import { Button, Box } from "@mui/material";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const btn = {
  width: "100px",
  height: "40px",
  backgroundColor: "gray",
  fontSize: "18px",
  color: "white",
  textDecoration: "none",
};
const AdminMenu = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="/"
      >
        سایت
      </Button>

      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="admin"
      >
        محصولات
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="existence"
      >
        موجودیت
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        // component={RouterLink}
        // to="category/laptops"
      >
        سفارشات
      </Button>
    </Box>
  );
};

export default AdminMenu;
