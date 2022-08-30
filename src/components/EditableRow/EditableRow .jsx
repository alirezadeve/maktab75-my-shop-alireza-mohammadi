import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const stile = { width: "90%" };
  return (
    <TableRow>
      <TableCell>
        <TextField
          type="text"
          required="required"
          placeholder="اسم جدید..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="required"
          placeholder="اسم جدید..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          style={stile}
          id="standard-basic"
          label="توصیحات"
          variant="standard"
          type="text"
          // required="required"
          placeholder="توصیحات جدید..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          required="required"
          placeholder="قیمت جدید..."
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell sx={{ display: "flex" }}>
        <Button variant="outlined" type="submit">
          Save
        </Button>
        <Button variant="outlined" type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EditableRow;
