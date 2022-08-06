import React from "react";
import Image from "next/image";
import shoes from "../public/images/shoes.jpg";
import shoes1 from "../public/images/shoes1.jpg";
import furnitures from "../public/images/furnitures.jpg";
export default function StoreCard(props) {
  return (
    <div className="Store-card" data-aos="fade-up" data-aos-delay={props?.delay}>
      <Image alt="" src={furnitures} className="store-image" layout="responsive" />
      <div className="store-info">
        <div>
        <a href="/store/Digital-Educational-Resources" className="store-id">
          <Image alt="" src={shoes} className="store-dp" width={40} height={40} />
          <div className="store-title-wrap">
            <div>
            <h3 className="store-title">Digital Educational Resources</h3>
            <p className="store-deparment">Shoes</p>
            </div>
          </div>
          
        </a>
        
        </div>
        <div className="store-action">
             <p className="store-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star"></i>{" "}
              <small>(4.3)</small>

              
            </p>
            < >
        <button className="btn btn-store-follow">400 Follow</button>
        </>
          </div>

      </div>
    </div>
  );
}
