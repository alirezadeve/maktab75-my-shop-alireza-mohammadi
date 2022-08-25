import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//
// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import images from "../../images/camel-logo.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
const Line = { textDecoration: "none" };
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //////////////////////////////////////////////

  //////////////get products/////////////////////

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products`, {
        headers: {
          "x-total-count": "x-total-count",
        },
      });
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/laptops"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          لپ تاپ ها
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("laptops"))
          .map((laptops) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={laptops.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {laptops.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {laptops.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/smartphones"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          موبایل ها
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("smartphones"))
          .map((smartphones) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={smartphones.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {smartphones.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {smartphones.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/fragrances"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          عطر ها
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("fragrances"))
          .map((fragrances) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={fragrances.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {fragrances.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {fragrances.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/skincare"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          روغن ها
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("skincare"))
          .map((skincare) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={skincare.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {skincare.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {skincare.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/groceries"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          خوراکی ها
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("groceries"))
          .map((groceries) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={groceries.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {groceries.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {groceries.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Box sx={{ width: "100", padding: "30px", display: "flex" }}>
        <Typography
          variant="h1"
          gutterBottom
          component={RouterLink}
          to="category/homeDecoration"
          // style={Line}
          style={Line}
          color="info"
          sx={{ color: "text.secondary" }}
        >
          وسایل خانه
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products
          .filter((product) => product.category.includes("homeDecoration"))
          .map((homeDecoration) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={homeDecoration.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    fontSize="17px"
                    fontWeight="bold"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {homeDecoration.title}
                  </Typography>
                  <Typography
                    fontSize="17px"
                    variant="body2"
                    color="text.secondary"
                  >
                    {homeDecoration.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="outlined"
                  onClick={() => {
                    // handleModalOpen();
                  }}
                >
                  Primary
                </Button>
              </CardActions>
            </Card>
          ))}
      </Box>
    </Box>
  );
}
// beram to menoo bd to onclikesh filteraro benevisam bad yejoor be car dam pas bedam render konam
