import "../../assets/styles/components/Menu/Menu.scss";
import { Button, Box } from "@mui/material";

import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
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
    // <Box sx={{ display: "flex", justifyContent: "space-between" }}>
    //   <Box
    //     directions="row"
    //     spacing="{2}"
    //     sx={{
    //       width: "50%",
    //       display: "flex",
    //       justifyContent: "start",
    //       paddingX: 2,
    //       height: "40px",
    //     }}
    //   >
    //     <Button
    //       sx={{ ml: "2rem" }}
    //       style={btn}
    //       // color="primary"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 1
    //     </Button>
    //     <Button
    //       sx={{ ml: "2rem" }}
    //       color="info"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 2
    //     </Button>
    //     <Button
    //       sx={{ ml: "2rem" }}
    //       color="info"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 3
    //     </Button>
    //     <Button
    //       sx={{ ml: "2rem", with: "20px" }}
    //       djhhdioso
    //       color="info"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 4
    //     </Button>
    //     <Button
    //       sx={{ ml: "2rem" }}
    //       color="info"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 5
    //     </Button>
    //     <Button
    //       sx={{ ml: "2rem" }}
    //       color="info"
    //       variant="contained"
    //       size="large"
    //     >
    //       شیفت 6
    //     </Button>
    //   </Box>
    //   <Box
    //     sx={{
    //       width: "50%",
    //       display: "flex",
    //       justifyContent: "end",
    //       paddingX: 2,
    //       // alignItems: "center",
    //     }}
    //   >
    //     {/* <TipsAndUpdatesIcon
    //       sx={{
    //         ml: 2,
    //       }}
    //     /> */}
    //     {/* <Typography variant="h4" gutterBottom component="div">
    //       لورم اسپیرم ندئسیشبخه
    //     </Typography> */}
    //   </Box>
    // </Box>
    <>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
      >
        kir 1
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
      >
        kir 2
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
      >
        kir 3
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
      >
        kir 4
      </Button>
      <Button
        sx={{ ml: "2rem" }}
        style={btn}
        // color="primary"
        variant="outlined"
        size="large"
      >
        kir 4
      </Button>
      <Link to="login">
        <Button
          sx={{ ml: "2rem" }}
          style={btn}
          // color="primary"
          variant="outlined"
          size="large"
        >
          kir 5
        </Button>
      </Link>
    </>
  );
}
