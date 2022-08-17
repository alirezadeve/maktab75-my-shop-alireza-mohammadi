// import * as React from "react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Pagination, Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { PaginationSize } from "components";
import axios from "axios";

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
  const [users, setUsers] = useState([]);

  const getProducts = async (page) => {
    try {
      const res = await axios.get(
        `http://localhost:3001/products?_page=${page}&_limit=${10}`,
        {
          headers: {
            "x-total-count": "x-total-count",
          },
        }
      );

      setProducts(res.data);
      const totalProducts = Number(res.headers["x-total-count"]);
      const totalPage = Math.ceil(totalProducts / 10);
      setTotalProductPages(totalPage);
    } catch (error) {
      console.log(error);
    }
  };
  const getUsers = async () => {
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const size = { fontSize: "14px" };
  const tdWidth = { width: "37%", fontSize: "14px" };
  const Tsize = { fontSize: "18px" };
  const imgSize = { width: "50px" };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "secondary",
        paddingLeft: "20px",
        paddingRight: "20px",
        bgcolor: "secondary",
      }}
    >
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          padding: "30px 10px",
          backgroundColor: "secondary",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="سفارشات" style={size} {...a11yProps(0)} />
          <Tab label="کاربران" style={size} {...a11yProps(1)} />
          <Tab label="محصولات" style={size} {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/*  */}
      <TabPanel value={value} index={0}>
        {/*  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>A basic table example with a caption</caption>
            {/*  */}
            <TableHead>
              <TableRow>
                <TableCell style={Tsize}>Dessert (100g serving)</TableCell>
                <TableCell align="right" style={Tsize}>
                  Calories
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            {/*  */}
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" style={size}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {row.calories}
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {row.fat}
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {row.carbs}
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {row.protein}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/*  */}
          </Table>
        </TableContainer>
        {/*  */}
      </TabPanel>
      {/*  */}
      <TabPanel value={value} index={1}>
        {/*  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>A basic table example with a caption</caption>
            {/* <caption>A basic table example with a caption</caption> */}
            <TableHead>
              <TableRow>
                <TableCell align="right" style={Tsize}>
                  Calories
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Fat&nbsp;(g)
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            {/*  */}
            <TableBody>
              {users.map((row) => {
                // console.log(row);
                return (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row" style={size}>
                      <img src={`${row.avatar}`} alt={`${row.name}`} />
                    </TableCell>
                    <TableCell align="right" style={size}>
                      {row.name}
                    </TableCell>
                    <TableCell align="right" style={size}>
                      {row.lastName}
                    </TableCell>
                    <TableCell align="right" style={size}>
                      {row.phoneNumber}
                    </TableCell>
                    <TableCell align="right" style={size}>
                      {row.id}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            {/*  */}
          </Table>
        </TableContainer>
        {/*  */}
      </TabPanel>
      {/*  */}
      <TabPanel value={value} index={2}>
        {/*  */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>Add Delete Edit</caption>
            <TableHead>
              {/*  */}
              <TableRow>
                <TableCell style={Tsize}>عکس محصول</TableCell>
                <TableCell align="right" style={Tsize}>
                  نام محصول
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  توضیحات
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  قیمت محصول
                </TableCell>
                <TableCell align="right" style={Tsize}>
                  عملیات
                </TableCell>
              </TableRow>
              {/*  */}
            </TableHead>
            {/*  */}
            <TableBody>
              {products.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" style={size}>
                    <img
                      style={imgSize}
                      src={`${row.thumbnail}`}
                      alt={`${row.title}`}
                    />
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {row.title}
                    {/* {row.category} */}
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
              ))}
            </TableBody>
            <Pagination
            
              count={totalProductPages}
              page={currentProductPage}
              onChange={(e, page) => {
                setCurrentProductPage(page);
                getProducts(page);
              }}
              color="primary"
            />
            {/*  */}
          </Table>
        </TableContainer>
        {/*  */}
      </TabPanel>
      {/*  */}
    </Box>
  );
}
