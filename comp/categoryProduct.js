import React, { useState, useRef } from "react";
import books from '../public/images/books.jpg'
import computer_laptops from '../public/images/computer_laptops.jpg'
import fashions from '../public/images/fashions.jpg'
import furnitures from '../public/images/furnitures.jpg'
import jewlery from '../public/images/jewlery.jpg'
import shoes from '../public/images/shoes.jpg'
import shoes1 from '../public/images/shoes1.jpg'
import sports from '../public/images/sports.jpg'
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

import ProductCard from "./ProductCard";
export default function CategoryProducts() {
  const [categories, setcategories] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [products, setproducts] = useState([
    {
      id: 1,
      rating: 3.5,
      likes: 856,
      price: 2224,
      sub_price: 985,
      Title: "Tomatoes Tear Drop Yellow",
          image: sports,
    },
    {
      id: 2,
      rating: 2.8,
      likes: 17,
      price: 7689,
      sub_price: 550,
      Title: "Cheese - Cheddar With Claret",
          image: books,
    },
    {
      id: 3,
      rating: 2.8,
      likes: 507,
      price: 4352,
      sub_price: 6599,
      Title: "Lamb Shoulder Boneless Nz",
          image: shoes1,
    },
    {
      id: 4,
      rating: 5.0,
      likes: 435,
      price: 4095,
      sub_price: 6077,
      Title: "Pork - Bacon Cooked Slcd",
          image: shoes,
    },
    {
      id: 5,
      rating: 2.6,
      likes: 157,
      price: 4638,
      sub_price: 9789,
      Title: "Wine - Puligny Montrachet A.",
          image:jewlery,
    },
    {
      id: 6,
      rating: 2.8,
      likes: 149,
      price: 7656,
      sub_price: 4660,
      Title: "Soup V8 Roasted Red Pepper",
          image: furnitures,
    },
    {
      id: 7,
      rating: 3.5,
      likes: 123,
      price: 4097,
      sub_price: 5750,
      Title: "Steel Wool S.o.s",
          image: fashions,
    },
    {
      id: 8,
      rating: 4.7,
      likes: 210,
      price: 8079,
      sub_price: 3699,
      Title: "Pork - Bacon, Double Smoked",
          image: computer_laptops,
    },
    {
      id: 9,
      rating: 3.7,
      likes: 285,
      price: 2383,
      sub_price: 1919,
      Title: "Salmon - Atlantic, No Skin",
          image: shoes,
    },
    {
      id: 10,
      rating: 3.1,
      likes: 666,
      price: 5961,
      sub_price: 1669,
      Title: "Wine - Muscadet Sur Lie",
          image: books,
    },
  ]);
  return (
    <div className="store-slider">
      <h1>Shoes</h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={50}
        navigation={isMobile ? false : true}
        loop={false}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          
          "@0.75": {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          "@1.00": {
            slidesPerView: 4.2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5.2,
            spaceBetween: 40,
          },
        }}
      >
        <>
          {products?.map((item, index) => (
            <SwiperSlide className="stores-product-slider">
              <ProductCard
          key={item.id}

                id={item.id}
                Title={item.Title}
                price={item.price}
                sub_price={item.sub_price}
                likes={item.likes}
                rating={item.rating}
                delay={index * 100}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}
