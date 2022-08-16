import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const pageSize = 10;
export default function PaginationSize() {
  return (
    <box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        margin: "20 0",
      }}
    >
      <Pagination count={10} />
    </box>
  );
}
