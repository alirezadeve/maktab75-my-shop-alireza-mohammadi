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
export default function Menu() {
  return (
    <>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="/"
      >
        خانه
      </Button>

      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/smartphones"
      >
        موبایل
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/laptops"
      >
        لپ تاپ
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/fragrances"
      >
        عطر
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/skincare"
      >
        روغن
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/groceries"
      >
        خوراکی
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="category/homeDecoration"
      >
        وسیله
      </Button>
      {/* <Link
        // component={RouterLink}
        // to="login"
        sx={{
          textDecoration: "none",
        }}
      > */}
      <Button
        sx={{ textDecoration: "none", ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
        component={RouterLink}
        to="login"
      >
        ورود
      </Button>
      {/* </Link> */}
    </>
  );
}
