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

const PDP = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
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
    console.log(id);
  }, []);

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
      <Grid container spacing={2}>
        <Grid md={6}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div>
              {images.map((img) => {
                console.log(img);

                <SwiperSlide>
                  <img src={img} />
                </SwiperSlide>;
              })}
            </div>
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
        </Grid>
        <Grid>
          <Box sx={{ display: "flex", flexDirection: "column", with: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Typography variant="h1" gutterBottom>
                {product.title}
              </Typography>
            </Box>
            <Box sx={{ fontSize: "18px" }}>{product.description}</Box>
            <Box>
               
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PDP;
