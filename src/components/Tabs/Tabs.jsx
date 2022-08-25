// import * as React from "react";
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Pagination, Paper, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "nanoid";

import { PaginationSize } from "components";
import axios from "axios";
import EditableRow from "components/EditableRow/EditableRow ";
import ReadOnlyRow from "components/ReadOnlyRow/ReadOnlyRow";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 500, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 80.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function BasicTabs() {
  const [products, setProducts] = useState([]);
  const [totalProductPages, setTotalProductPages] = useState(1);
  const [currentProductPage, setCurrentProductPage] = useState(1);

  // const [users, setUsers] = useState([]);
  // const [totalUsersPages, setTotalUsersPages] = useState(1);
  // const [currentUsersPage, setCurrentUsersPage] = useState(1);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };
  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     title: addFormData.title,
  //     description: addFormData.description,
  //     price: addFormData.price,
  //   };
  //   const newContacts = [...products, newContact];
  //   setProducts(newContacts);
  // };

  // const [addFormData, setAddFormData] = useState({
  //   title: "",
  //   description: "",
  //   price: "",
  // });
  // const [editFormData, setEditFormData] = useState({
  //   fullName: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  // });
  // const [editContactId, setEditContactId] = useState(null);
  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  // };
  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };
  // const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newProducts = [...products, newContact];
    setProducts(newProducts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newProducts = [...products];

    const index = products.findIndex((contact) => contact.id === editContactId);

    newProducts[index] = editedContact;

    setProducts(newProducts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newProducts = [...products];

    const index = products.findIndex((contact) => contact.id === contactId);

    newProducts.splice(index, 1);

    setProducts(newProducts);
  };

  const getProducts = async (page) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/products?_page=${page}&_limit=${5}`,
        {
          headers: {
            "x-total-count": "x-total-count",
          },
        }
      );
      setProducts(res.data);
      const totalProducts = Number(res.headers["x-total-count"]);
      const totalPage = Math.ceil(totalProducts / 5);
      setTotalProductPages(totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const size = { fontSize: "14px" };
  const tdWidth = { width: "37%", fontSize: "14px" };
  const Tsize = { fontSize: "18px" };
  const imgSize = { width: "50px" };

  //////////////

  return (

    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
