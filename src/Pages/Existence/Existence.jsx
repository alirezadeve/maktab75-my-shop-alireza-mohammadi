// import React from "react";
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
// import { adminMenu } from "../index";

import { PaginationSize } from "components";
import axios from "axios";
// import EditableRow from "components/EditableRow/EditableRow ";
// import ReadOnlyRow from "components/ReadOnlyRow/ReadOnlyRow";
import AdminMenu from "components/Menu/AdminMenu";
import EditableRow from "./EditableRow/EditableRowExistence";
import ReadOnlyRow from "./ReadOnlyRow/ReadOnlyRowExistence";
import { useParams } from "react-router-dom";
// import EditableRow from "./EditableRow/EditableRowExistence";
// import ReadOnlyRow from "./ReadOnlyRow/ReadOnlyRowExistence";
// import { AdminMenu } from "components/Menu/AdminMenu";
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
const Existence = () => {
  const [products, setProducts] = useState([]);
  const [totalProductPages, setTotalProductPages] = useState(1);
  const [currentProductPage, setCurrentProductPage] = useState(1);

  const [addFormData, setAddFormData] = useState({
    title: "",
    description: "",
    price: "",
    // email: "",
  });

  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    price: "",
    // email: "",
  });

  const [editProductsId, setEditProductsId] = useState(null);

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

    const newProduct = {
      id: nanoid(),
      title: addFormData.title,
      description: addFormData.description,
      price: addFormData.price,
      // email: addFormData.email,
    };

    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedProducts = {
      id: editProductsId,
      title: editFormData.title,
      description: editFormData.description,
      price: editFormData.price,
      // email: editFormData.email,
    };

    const newProducts = [...products];

    const index = products.findIndex(
      (products) => products.id === editProductsId
    );

    newProducts[index] = editedProducts;

    setProducts(newProducts);
    setEditProductsId(null);
  };

  const handleEditClick = (event, products) => {
    event.preventDefault();
    setEditProductsId(products.id);

    const formValues = {
      title: products.title,
      description: products.description,
      price: products.price,
      // email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditProductsId(null);
  };

  const handleDeleteClick = (productsproductsId) => {
    const newProducts = [...products];

    const index = products.findIndex(
      (products) => products.id === editProductsId
    );

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
  const { existence } = useParams();
  useEffect(() => {
    getProducts();
  }, [existence]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Tsize = { fontSize: "18px" };

  return (
    <div className="app-container">
      <AdminMenu />
      <form onSubmit={handleEditFormSubmit}>
        <table sx={{ width: "100%" }}>
          <TableHead>
            {/* <tr> */}
            <TableCell style={Tsize}>عکس محصول</TableCell>
            <TableCell align="center" style={Tsize}>
              نام محصول
            </TableCell>
            <TableCell align="right" style={Tsize}>
              توضیحات
            </TableCell>{" "}
            <TableCell align="right" style={Tsize}>
              قیمت محصول
            </TableCell>
            <TableCell align="right" style={Tsize}>
              تعداد
            </TableCell>
            <TableCell align="right" style={Tsize}>
              تخفیف{" "}
            </TableCell>
            <TableCell align="right" style={Tsize}>
              عملیات
            </TableCell>
            {/* </tr> */}
          </TableHead>
          <tbody>
            {products.map((products) => (
              <Fragment>
                {editProductsId === products.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    products={products}
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
          name="title"
          // required="required"
          placeholder="نام محصول..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          // required="required"
          placeholder="توضیحات محصول..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="price"
          // required="required"
          placeholder="قیمت محصول..."
          onChange={handleAddFormChange}
        />
        {/* <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        /> */}
        <button type="submit">Add</button>
      </form>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Pagination
          size="large"
          count={totalProductPages}
          page={currentProductPage}
          onChange={(e, page) => {
            setCurrentProductPage(page);
            getProducts(page);
          }}
          color="info"
        />
      </Box>
    </div>
  );
};

export default Existence;
