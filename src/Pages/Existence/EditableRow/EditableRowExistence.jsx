import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const stile = { width: "90%" };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };
  const fonstsize = { fonstsize: "large" };
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
      <TableCell>
        <TextField
          type="text"
          // required="required"
          placeholder="تعداد جدید..."
          name="stock"
          value={editFormData.stock}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          // required="required"
          placeholder="تخفیف جدید..."
          name="rating"
          value={editFormData.rating}
          onChange={handleEditFormChange}
        ></TextField>
      </TableCell>
      <TableCell>
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
