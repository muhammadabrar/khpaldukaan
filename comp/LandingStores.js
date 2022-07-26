import React, { useState, useRef } from "react";


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import StoreCard from "./StoreCard";
export default function LandingStores() {
  const [categories, setcategories] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]);

  return (
    <div className="store-slider">
        <h1 >Top 10 Stores</h1>
      <Swiper
        
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={10}

        navigation={isMobile ? false : true}
        loop={false}
      >
        <>
          {categories?.map((item, index) => (
            <SwiperSlide className="stores-product-slider">
                
          
                <StoreCard key={index} delay={index * 100}/>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}
