import "../../assets/styles/components/Menu/Menu.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { createTheme } from "@mui/material/styles";

export default function Menu() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        directions="row"
        spacing="{2}"
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "start",
          paddingX: 2,
        }}
      >
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 1
        </Button>
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 2
        </Button>
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 3
        </Button>
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 4
        </Button>
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 5
        </Button>
        <Button
          sx={{ ml: "2rem" }}
          color="info"
          variant="contained"
          size="large"
        >
          شیفت 6
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "end",
          paddingX: 2,
          // alignItems: "center",
        }}
      >
        <TipsAndUpdatesIcon
          sx={{
            
            ml: 2,
          }}
        />
        <Typography variant="h4" gutterBottom component="div">
          لورم اسپیرم ندئسیشبخه
        </Typography>
      </Box>
    </Box>
  );
}
