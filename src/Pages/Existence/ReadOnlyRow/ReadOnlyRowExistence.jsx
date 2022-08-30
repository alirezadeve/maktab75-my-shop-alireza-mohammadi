import { Button, Pagination, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
const imgSize = { width: "80%", margin: "0 auto" };
const ReadOnlyRow = ({ products, handleEditClick, handleDeleteClick }) => {
  const size = { fontSize: "14px" };
  const tdWidth = { width: "37%", fontSize: "14px" };
  const imgSize = { width: "20%", margin: "0 auto" };

  return (
    <TableRow key={products.id}>
      {/* <td>{products.fullName}</td> */}
      <TableCell component="th" scope="row" style={size}>
        {
          <img
            style={imgSize}
            src={`${products.thumbnail}`}
            alt={`${products.title}`}
          />
        }
      </TableCell>
      <TableCell align="center" style={size}>
        {products.title}
      </TableCell>
      <TableCell align="right" style={tdWidth}>
        {products.description}
      </TableCell>
      <TableCell align="right" style={size}>
        {products.price}
      </TableCell>
      <TableCell align="right" style={size}>
        {products.stock}
      </TableCell>
      <TableCell align="right" style={size}>
        {products.rating}
      </TableCell>
      <TableCell sx={{ display: "flex", gap: "5px" }}>
        <Button
          variant="contained"
          type="button"
          onClick={(event) => handleEditClick(event, products)}
        >
          به روز
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => handleDeleteClick(products.id)}
        >
          حذف
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;
