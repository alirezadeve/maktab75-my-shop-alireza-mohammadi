import React from "react";
const imgSize = { width: "50px" };
const ReadOnlyRow = ({ products, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{products.fullName}</td>
      <td>
        {
          <img
            style={imgSize}
            src={`${products.thumbnail}`}
            alt={`${products.title}`}
          />
        }
      </td>
      <td>{products.address}</td>
      <td>{products.phoneNumber}</td>
      <td>{products.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, products)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(products.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
