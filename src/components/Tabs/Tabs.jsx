// import * as React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import db from "../../db.json";

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
  const [user, setUser] = useState(db.users);
  // console.log("lkopjiuooilk", db);
  const [products, setproducts] = useState(db.products);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const size = { fontSize: "14px" };
  const Tsize = { fontSize: "18px" };
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
          <Tab label="Item One" style={size} {...a11yProps(0)} />
          <Tab label="Item Two" style={size} {...a11yProps(1)} />
          <Tab label="Item Three" style={size} {...a11yProps(2)} />
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
            <TableHead>
              {products.map((product) => {
                return (
                  <TableRow>
                    <TableCell style={Tsize}>Dessert (100g serving)</TableCell>
                    <TableCell align="right" style={Tsize}>
                      {product.title}
                    </TableCell>
                    <TableCell align="right" style={Tsize}>
                      {product.barnd}
                    </TableCell>
                    <TableCell align="right" style={Tsize}>
                      Carbs&nbsp;(g)
                    </TableCell>
                    <TableCell align="right" style={Tsize}>
                      Protein&nbsp;(g)
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableHead>
            {/*  */}
            <TableBody>
              {user.map((row) => {
                console.log(row);
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
            <caption>A basic table example with a caption</caption>
            <TableHead>
              {/*  */}
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
              {/*  */}
            </TableHead>
            {/*  */}
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" style={size}>
                    {/* {row.name} */}alskfcdolpas
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {/* {row.calories} */};skdpoak
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {/* {row.fat} */}amskfco
                  </TableCell>
                  <TableCell align="right" style={size}>
                    {/* {row.carbs} */}jmasidkoj
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
    </Box>
  );
}
