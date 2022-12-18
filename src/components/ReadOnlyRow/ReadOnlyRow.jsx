import { Button, Pagination, TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useState } from "react";
const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
  const imgSize = { width: "20%", margin: "0 auto" };
  const size = { fontSize: "14px" };
  const tdWidth = { width: "37%", fontSize: "14px" };
  return (
    <TableRow key={product.id}>
      <TableCell component="th" scope="row" style={size}>
        <img
          style={imgSize}
          src={`${product.thumbnail}`}
          alt={`${product.title}`}
        />
      </TableCell>

      <TableCell align="center" style={size}>
        {product.title}
      </TableCell>
      {/* <td>{products.title}</td> */}

      {/* <td>{products.description}</td> */}
      <TableCell align="right" style={tdWidth}>
        {product.description}
      </TableCell>
      {/* <td>{products.price}</td> */}
      <TableCell align="right" style={size}>
        {product.price}
      </TableCell>
      <TableCell sx={{ display: "flex", gap: "5px" }}>
        <Button
          variant="contained"
          type="button"
          onClick={(event) => handleEditClick(event, product)}
        >
          به روز
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => handleDeleteClick(product.id)}
        >
          حذف
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
