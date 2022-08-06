import ProductsGrid from "../comp/productsGrid";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { isMobile } from "react-device-detect";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Result = () => {
  const router = useRouter();
  const { sq } = router.query;
  const [dropdown, setdropdown] = useState();

  function drop(item) {
    if (dropdown == item) {
      setdropdown();
    } else {
      setdropdown(item);
    }
  }
  const [movies, setmovies] = useState([]);
  return (
    <div className="content">
       { movies.map((movie)=><></>)}
      <div className="container">
        <div className="search-header">
          <div className="d-flex justify-content-between align-item-center">
            <p>Search Result for "sq"</p>
          </div>
          <>
            <Swiper
              className="related-keyword"
              // modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={"auto"}
              loop={false}
            >
              <>
                <SwiperSlide className="defaultcategory-card-sm">
                Sort By :  <button
                    className={`btn btn-filter ${
                      dropdown == "Sort" && "active"
                    }`}
                    onClick={() => drop("Sort")}
                  >
                     Best Match <i className="bi bi-caret-down-fill"></i>
                  </button>
                </SwiperSlide>
                
                <SwiperSlide className="defaultcategory-card-sm">
                  <button
                    className={`btn btn-filter ${
                      dropdown == "rating" && "active"
                    }`}
                    onClick={() => drop("rating")}
                  >
                    Rating <i className="bi bi-caret-down-fill"></i>
                  </button>
                </SwiperSlide>
                <SwiperSlide className="defaultcategory-card-sm">
                  <button className="btn btn-filter">Free Deliver</button>
                </SwiperSlide>
                <SwiperSlide className="defaultcategory-card-sm">
                  <button
                    className={`btn btn-filter ${
                      dropdown == "category" && "active"
                    }`}
                    onClick={() => drop("category")}
                  >
                    Related categories <i className="bi bi-caret-down-fill"></i>
                  </button>
                </SwiperSlide>
               
                
              </>
            </Swiper>
          </>
          {dropdown ? (
            dropdown == "category" ? (
                <ul className="block">
                <li>
                  <Link href="/">Basic Keyboards</Link>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
                <li>
                  <a href="#">Basic Keyboards</a>
                </li>
              </ul>
            ) : dropdown == "Sort" ? (
              <Swiper
                className="related-keyword"
                // modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={"auto"}
                loop={false}
              >
                <>
                  <SwiperSlide className="defaultcategory-card-sm">
                    <button className="btn btn-filter active">
                      Best Match <i className="bi bi-hand-thumbs-up"></i>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide className="defaultcategory-card-sm">
                    <button className="btn btn-filter">Top Sale</button>
                  </SwiperSlide>
                  <SwiperSlide className="defaultcategory-card-sm">
                    <button className="btn btn-filter">
                      price <i className="bi bi-arrow-down-up"></i>
                    </button>
                  </SwiperSlide>
                  <SwiperSlide className="defaultcategory-card-sm">
                    <button className="btn btn-filter">
                      New <i className="bi bi-clock"></i>
                    </button>
                  </SwiperSlide>
                </>
              </Swiper>
            ) : (
              <div className="block">
               <p>Customer Reviews</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                </ul>
              </div>
            )
          ) : (
            ""
          )}
        </div>
        <ProductsGrid />
        <div className="row">
          {/* <div className="col-md-3">
            <div className="side-bar">
              <div className=" block">
                <p>Related categories</p>
                <ul>
                  <li>
                    <Link href="/">Basic Keyboards</Link>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                  <li>
                    <a href="#">Basic Keyboards</a>
                  </li>
                </ul>
              </div>
              <div className=" block">
                <p>Customer Reviews</p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i> & up
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" block">
                <p>Delivery</p>
                <ul>
                  <li>
                    <Link href="/">Free Delivery</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
};

export default Result;
