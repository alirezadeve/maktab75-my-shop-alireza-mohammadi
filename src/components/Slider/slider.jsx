// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Navigation } from "swiper";
// import { image } from "../../images/slide3_birds.png";

// export default function Slider() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>
//           {/* <image src={images} alt="images" /> */}
//           <div className="swiper-zoom-container">
//             {/* <img
//               src="https://swiperjs.com/demos/images/nature-2.jpg"
//               alt="https://swiperjs.com/demos/images/nature-2.jpg0."
//             /> */}
//             {/* {image} */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
//             <image />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import { siliderimg } from "../../images/slide3_bg.png";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src="./slide3_bg.png" alt="11not found" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="../../images/slide3_bg.png" alt="not found" />
          </div>
          {/* <siliderimg /> */}
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
