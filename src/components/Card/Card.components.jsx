import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import images from "../../images/camel-logo.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ActionAreaCard = ({ handleModalOpen }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

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
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
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
                handleModalOpen();
              }}
            >
              Primary
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
export default ActionAreaCard;
