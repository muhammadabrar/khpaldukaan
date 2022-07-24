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

export default function CategoriesSlider() {
  const [categories, setcategories] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  return (
    <>
      <Swiper
        className="defaultcategory-sm "
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={isMobile ? false : true}
        loop={false}
        
      >
        <>
          {/* {categories?.map((item, index) => (
            <SwiperSlide className="defaultcategory-card-sm"
              
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>categories {index}</p>
              </a>
            </SwiperSlide>
          ))} */}
          <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-border-all"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-tv-fill"></i>
                <p>Appliances </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-heart-pulse-fill"></i>
                <p>Beauty &amp; Personal Care </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>Camera &amp; Photo Products </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-pc-display"></i>
                <p>Computers &amp; Accessories </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-phone-fill"></i>
                <p>Cell Phones &amp; Accessories</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-lightbulb-fill"></i>
                <p>Electronics </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>Clothing, Shoes &amp; Jewelry </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="defaultcategory-card-sm"
              
             
            >
              <a href="#" className="defaultcategory-link">
                <i className="bi bi-camera-fill"></i>
                <p>ALL </p>
              </a>
            </SwiperSlide>
        </>
      </Swiper>
    </>
  );
}
