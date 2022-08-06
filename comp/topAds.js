import React from "react";
import Image from "next/future/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import banner1 from "../public/images/banner1.webp";
import cover from "../public/images/cover.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner2 from "../public/images/banner2.webp";
export default function TopAds() {
  return (
    <div >
      <Swiper

        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="slider"
      >
        <SwiperSlide>
          <a href="#"><Image alt="" src={banner1} layout="responsive" className="slider-img" />
          </a></SwiperSlide>
        <SwiperSlide>
        <a href="#"> <Image alt="" src={banner2} layout="responsive" className="slider-img" />
        </a> </SwiperSlide>
        {/* <SwiperSlide><Image alt="" src={cover} layout="cover" className="slider-img" /></SwiperSlide> */}
      </Swiper>
    </div>
  );
}
