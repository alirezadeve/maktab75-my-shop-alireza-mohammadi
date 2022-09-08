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
  const size = { width: "45%" };
  return (
    <>
      {/* <Grid container>
      <Grid xs={12} ></Grid>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </Grid>

      <div>{product.title}</div> */}
      <Grid container>
        <Grid sx={12} sm={12} md={6} style={size}>
          <div>
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
                  <img src={img} />
                </SwiperSlide> 
                // </div>;
              ))}
              ;
              {/* <SwiperSlide>image={product.images}</SwiperSlide>
            <SwiperSlide>
              <img src={product.images} alt={product.images} />
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
          </div>
        </Grid>
        <Grid sx={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              with: "57%",
              alignItems: "end",
              // mr: "10px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Typography variant="h1" gutterBottom>
                {product.title}
              </Typography>
            </Box>
            <Box sx={{ fontSize: "18px", mb: "40px" }}>
              {product.description}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "40px",
                border: "1px solid black",
                p: "20px",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h4" gutterBotto sx={{ ml: "auto" }}>
                {count}
              </Typography>
              <Typography variant="h5" gutterBotto sx={{ ml: "40px" }}>
                Number
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ width: "40px", height: "40px" }}
                onClick={() => {
                  console.log(setCount(count - 1));
                }}
              >
                <RemoveIcon />
              </Fab>
              <Fab
                color="primary"
                aria-label="add"
                sx={{ width: "40px", height: "40px", ml: "20px" }}
                onClick={() => {
                  console.log(setCount(count + 1));
                }}
              >
                <AddIcon />
              </Fab>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PDP;
