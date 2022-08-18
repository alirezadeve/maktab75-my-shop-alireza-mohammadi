import { Box, Typography } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import React from "react";
const logoBox = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
};
export default function Takhfif() {
  return (
    <Box style={logoBox}>
      <TipsAndUpdatesIcon
        sx={{
          ml: 2,
        }}
      />
      <Typography variant="h4" gutterBottom component="div">
        لورم اسپیرم ندئسیشبخه
      </Typography>
    </Box>
  );
}
