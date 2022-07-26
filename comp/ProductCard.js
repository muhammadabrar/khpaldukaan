import React, { useState } from "react";
import Image from "next/image";
import shoes from "../public/images/shoes.jpg";
import shoes1 from "../public/images/shoes1.jpg";
import furnitures from "../public/images/furnitures.jpg";
import Link from "next/link";
export default function ProductCard(props) {
  const [Islike, setIslike] = useState(false);
  return (
    <div className="product-card " data-aos="fade-up" data-aos-delay={props?.delay}
    >
      <div className="product-top">
        <a href={`product/Tomatoes-Tear-Drop`}>
          <Image alt="" src={props?.image} className="product-image" layout="responsive" />
        </a>
        <div className="product-action">
          <>
            <>
              <button
                className="btn btn-p-like"
                onClick={() => setIslike(!Islike)}
              >
                {" "}
                <i
                  className={
                    Islike ? `icon bi bi-heart-fill` : "icon bi bi-heart"
                  }
                ></i>{" "}
                {props?.likes}
              </button>
            </>
          </>
        
        </div>
      </div>
      <div className="product-bottom">
      <p className="product-rating">
            <span>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </span>
            {" "}
            ({props?.rating})
          </p>
        <Link className="Link" href={`Tomatoes-Tear-Drop`}><h3 className="product-title" title={props?.Title}>{props?.Title}</h3></Link>
        <div className="price-addToCart">
        <Link className="Link" href="Tomatoes-Tear-Drop"> 
        <><div>
        <h4 className="product-price">Rs. {props?.price}</h4>
        <h5 className="product-sub-price">
          <del>Rs. {props?.sub_price}</del>
        </h5>
        </div></></Link>
        <button className="btn btn-p-addToCart"><i className="bi bi-cart-plus"></i> </button>
        </div>
      </div>
    </div>
  );
}
