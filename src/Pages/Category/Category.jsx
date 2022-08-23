import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Typography from "@mui/material/Typography";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/products?category=${category}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////

  useEffect(() => {
    getProducts();
  }, [category]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
      }}
    >
      {/* <Typography variant="h1" gutterBottom> */}
      {category}.
      {products.map((products) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={products.thumbnail}
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
                {products.title}
              </Typography>
              <Typography
                fontSize="17px"
                variant="body2"
                color="text.secondary"
              >
                {products.description}
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
      {/* </Typography> */}
    </Box>
  );
};

export default Category;
