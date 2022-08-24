import { TableCell, TableRow, TextField } from "@mui/material";
import { Button } from "components";
import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={editFormData.title}
          type="text"
          onChange={handleEditFormChange} 
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={editFormData.description}
          type="text"
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={editFormData.price}
          type="text"
          onChange={handleEditFormChange}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <Button variant="outlined">Save</Button>
        <Button variant="outlined" type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
    // <tr>
    //   <td>
    //     <input
    //       type="text"
    //       required="required"
    //       placeholder="Enter a name..."
    //       name="fullName"
    //       value={editFormData.fullName}
    //       onChange={handleEditFormChange}
    //     ></input>
    //   </td>
    //   <td>
    //     <input
    //       type="text"
    //       required="required"
    //       placeholder="Enter an address..."
    //       name="address"
    //       value={editFormData.address}
    //       onChange={handleEditFormChange}
    //     ></input>
    //   </td>
    //   <td>
    //     <input
    //       type="text"
    //       required="required"
    //       placeholder="Enter a phone number..."
    //       name="phoneNumber"
    //       value={editFormData.phoneNumber}
    //       onChange={handleEditFormChange}
    //     ></input>
    //   </td>
    //   <td>
    //     <input
    //       type="email"
    //       required="required"
    //       placeholder="Enter an email..."
    //       name="email"
    //       value={editFormData.email}
    //       onChange={handleEditFormChange}
    //     ></input>
    //   </td>
    //   <td>
    //     <button type="submit">Save</button>
    //     <button type="button" onClick={handleCancelClick}>
    //       Cancel
    //     </button>
    //   </td>
    // </tr>
  );
};

export default EditableRow;
