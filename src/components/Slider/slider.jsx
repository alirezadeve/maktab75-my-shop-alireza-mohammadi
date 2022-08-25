import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { images } from "../../images/camel-logo.png";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {/* <image src={images} alt="images" /> */}
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
