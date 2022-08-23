import { Box } from "@mui/system";
import { Menu, Takhfif } from "components";
import React from "react";
import "../../../assets/styles/components/Flex/Flex.scss";
const size = { width: "70%", margin: "0 0 50px  0" };
const lorem = { width: "13%" };

export default function List() {
  return (
    <>
      <Box className="box">
        <Box style={size}>
          <Menu />
        </Box>
        <Box className="box" style={lorem}>
          <Takhfif />
        </Box>
      </Box>
    </>
  );
}
