import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "features/cartSlice";
import { useGetAllProductsQuery } from "../../features/productAPI";
///////////////////
const PDP = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  ///////////////////////////////////////////////
  const [count, setCount] = useState(0);
  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products/${id}`);
      setProduct(res.data);
      setImages(res.data.images);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
    // setCount();
    console.log(id);
  }, []);
  const size = { width: "45%", mx: "auto" };
  const imgSize = { height: "150px" };
  const titleStyle = { textAlign: "end" };

  ////////////////////////////////////////////////////////////////
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate(`/cart`);
  };

  return (
    <>
      <Box sx={{ width: "93%", mx: "auto", display: "flex" }}>
        {/* left */}
        <Box sx={{ width: "50%", mr: "auto" }}>
          <Box>
            <Box>
              <Box sx={{ fontSize: "20px", display: "flex" }}>
                <Box sx={{ fontSize: "larger" }}>{product.description}</Box>
                <Box sx={{ fontWeight: "bold" }}>:Description</Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "start",
                pt: "50px",
              }}
            >
              <Box sx={{ width: "25%", display: "flex" }}>
                <Box sx={{ fontSize: "larger", ml: "auto", mr: "0" }}>
                  {product.price}
                </Box>
                <Box sx={{ fontWeight: "bold", ml: "8px" }}>: price</Box>
              </Box>
              <Box sx={{ width: "25%", display: "flex" }}>
                <Box sx={{ fontSize: "larger", ml: "auto", mr: "0" }}>
                  {product.brand}
                </Box>
                <Box sx={{ fontWeight: "bold", ml: "8px" }}>: brand</Box>
              </Box>
              <Box sx={{ width: "30%", display: "flex" }}>
                <Box sx={{ fontSize: "larger", ml: "auto", mr: "0" }}>
                  {product.category}
                </Box>
                <Box sx={{ fontWeight: "bold", ml: "8px" }}>: category</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                justifyContent: 'space-evenly',
                pt: "50px",
                width: "100%",
              }}
            >
              {/* <Box> */}
              <Button
                color="secondary"
                onClick={() => handleAddToCart(product.category)}
              >
                Back
              </Button>
              {/* </Box> */}
              {/* <Box> */}
              <Button
                variant="contained"
                onClick={() => handleAddToCart(product.category)}
              >
                Add
              </Button>
              {/* </Box> */}
            </Box>
          </Box>
        </Box>

        {/* left */}
        {/* right */}
        <Box sx={{ width: "50%", ml: "auto" }}>
          <Box>
            <Typography variant="h1" gutterBottom style={titleStyle}>
              {product.title}
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                width: "100%",
                height: "180px",
              }}
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {images.map((img, i) => (
                  // <div className="swiper-zoom-container">
                  <SwiperSlide key={i}>
                    <img src={img} style={imgSize} />
                  </SwiperSlide>
                  // </div>;
                ))}
                ;
              </Swiper>
            </Box>
          </Box>
        </Box>
        {/* right */}
      </Box>
    </>
  );
};

export default PDP;
