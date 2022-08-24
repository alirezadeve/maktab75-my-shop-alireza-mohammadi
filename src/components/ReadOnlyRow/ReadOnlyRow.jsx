import { TableCell, TableRow } from "@mui/material";
import React from "react";

const ReadOnlyRow = ({ row }) => {
  const size = { fontSize: "14px" };
  const imgSize = { width: "50px" };
  const tdWidth = { width: "37%", fontSize: "14px" };
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row" style={size}>
        <img style={imgSize} src={`${row.thumbnail}`} alt={`${row.title}`} />
      </TableCell>
      <TableCell align="center" style={size}>
        {row.title}
      </TableCell>
      <TableCell align="right" style={tdWidth}>
        {row.description}
      </TableCell>
      <TableCell align="right" style={size}>
        {row.price}
      </TableCell>
      <TableCell align="right" style={size}>
        <button>add</button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
