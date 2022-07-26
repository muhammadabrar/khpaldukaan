import React, { useState } from "react";
import Header from "../../comp/header";
import Link from "next/link";
import Image from "next/image";
import books from "../../public/images/books.jpg";
import computer_laptops from "../../public/images/computer_laptops.jpg";
import fashions from "../../public/images/fashions.jpg";
import furnitures from "../../public/images/furnitures.jpg";
import jewlery from "../../public/images/jewlery.jpg";
import shoes from "../../public/images/shoes.jpg";
import shoes1 from "../../public/images/shoes1.jpg";
import sports from "../../public/images/sports.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css/pagination";
import { isMobile } from "react-device-detect";
import ProductCard from "../../comp/ProductCard";
export default function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [activeSlide, setactiveSlide] = useState(0);
  console.log(thumbsSwiper);
  const [images, setimages] = useState([
    books,
    computer_laptops,
    fashions,
    furnitures,
    jewlery,
    shoes,
    shoes1,
    sports,
  ]);
  function prevImage() {
    if (activeSlide == 0) {
      setactiveSlide(images.length - 1);
    } else {
      setactiveSlide(activeSlide - 1);
    }
  }
  function nextImage() {
    if (activeSlide == images.length - 1) {
      setactiveSlide(0);
    } else {
      setactiveSlide(activeSlide + 1);
    }
  }

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
    }
  ]);
  return (
    <>
      <Header />
      <div className="breadcrumb">
        <Link className="breadcrumb-link" style={{ color: "#bbbbbb" }} href="#">
          Home
        </Link>
        <i className="bi bi-chevron-right"></i> <a href="#">products</a>{" "}
        <i className="bi bi-chevron-right"></i> <a href="#">category</a>{" "}
        <i className="bi bi-chevron-right"></i>{" "}
        <a href="#" className="active">
          Sub_category
        </a>
      </div>
      <div className="container">
      <div className="productdetail-card">
        <div className="image-section">
          {!isMobile ? (
            <div className="active-img">
              {" "}
              <button
                className="btn btn-img-nav left"
                onClick={() => prevImage()}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <Image alt=""
                src={images[activeSlide]}
                className="product-image"
             
              />
              <button
                className="btn btn-img-nav right"
                onClick={() => nextImage()}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          ) : (
            <Swiper
              spaceBetween={10}
              navigation={true}
              
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-active active">
                <Image alt=""
                  src={shoes}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt=""
                  src={shoes1}
                  className="product-image"
                  layout="responsive"
                />
              </SwiperSlide>
            </Swiper>
          )}
          {!isMobile && (
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="product-image2"
                  onClick={() => setactiveSlide(index)}
                >
                  <Image alt=""
                    src={image}
                    layout="responsive"
                    className={activeSlide == index && "active"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="product-detail">
          <div className="product-detail-top">
            <h1 className="p-title">Pork - Bacon, Double Smoked</h1>
            <div className="product-rating">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <Link href={"#"} className="rating-info">
                (44 reviews | 100 sold)
              </Link>
            </div>
            <div className="flex">
              <div className="product-brand">
                Brand: <span>Nike</span>
              </div>
              <div>
                <i className="bi bi-share"></i>
              </div>
            </div>

            <div className="price-section">
              <h2>
                Rs. 12000 <del>Rs. 15000</del>
              </h2>
            </div>
          </div>
          <div className="p-variants">
            <p>variants</p>
            <div className="variant">
              <p className="variant-Title">Title</p>
              <div className="variant-values">
                <button className="btn btn-variant active">value 1</button>
                <button className="btn btn-variant">value 2</button>
                <button className="btn btn-variant">value 3</button>
                <button className="btn btn-variant">value 4</button>
                <button className="btn btn-variant">value 5</button>
              </div>
            </div>
            <div className="variant">
              <p className="variant-Title">Title</p>
              <div className="variant-values">
                <button className="btn btn-variant active">value 1</button>
                <button className="btn btn-variant">value 2</button>
                <button className="btn btn-variant">value 3</button>
                <button className="btn btn-variant">value 4</button>
                <button className="btn btn-variant">value 5</button>
              </div>
            </div>
          </div>
          <div className="delivery-info">
            <p>Delivery</p>
            <div className="d-flex">
              <i className="bi bi-truck"></i>{" "}
              <p>
                Shipping, <b> arrives by tomorrow to </b>
                <br />
                <a href="#"> maini, swabi,kpk, pakistan</a>
              </p>
            </div>
            <div className="d-flex">
              <i>
                <h1 className="brand-icon">
                  <span>K</span>D
                </h1>
              </i>
              <p>
                <> Sold and shipped by khpaldukaan.com</>
                <br/>
                <b>COD</b>, standerd delivery charges <b> Rs. 150</b>
              </p>
            </div>
            <div className="d-flex">
              <i className="bi bi-arrow-repeat"></i>{" "}
              <p>
                Free 90-Day returns <a href="#">Details</a>
              </p>
            </div>
          </div>
          <div className="btns">
            
            <button className="btn btn-outline" disabled>
              Add To cart
            </button>
            <button className="btn btn-fill">Buy Now</button>
          </div>
        </div>
        
      </div>
      <div className="detail-section">
          <div className="left-side">
            <div className="storeCard">
                <>
                <p className="card-title">Store</p>
                <h2 className="storeTitle">Store Title</h2>
                </>
                <div className="storeRating">
                    <div>
                        <p>Over All</p>
                        <h2>98%</h2>
                    </div>
                    <div>
                        <p>Ship on time</p>
                        <h2>100%</h2>
                    </div><div>
                        <p>Chat Response</p>
                        <h2>98%</h2>
                    </div>
                </div>
                <div className="storeActions">
                    <button className="btn btn-chat"><i className="bi bi-chat"></i> Chat</button>
                    <button className="btn btn-follow">Follow</button>
                </div>
            </div>
            <div className="related-product">
                <h4>Related Products</h4>
                <div className="related-product-wrap">
                {products?.map((item, index) => (
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
        ))}
        </div>
    
            </div>
          </div>
          <div className="card">
            <div className="card-header">
                <div className="tabs">
                    <button className="btn btn-tab active">Overview</button>
                    <button className="btn btn-tab">Specification</button>
                    <button className="btn btn-tab">Customer Reviews</button>
                </div>
            </div>
            <div className="card-body">
                <p>Conducted thorough reviews of potential business partnerships and strategies, and performed risk analysis using Facilitated Risk Analysis Process (FRAP)
Trained and supervised 2 new employees, ensuring they maintain high attention to detail
Forecast losses and earnings using quantitative/qualitative analyses to a high degree of accuracy, allowing the company to intelligently manage and invest resources valued at $14 million
Adhered to departmental controls and regulations and maintained ethical conduct at all times</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
