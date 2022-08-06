import React from "react";
import Header from "../../comp/header";
import Image from "next/image";
import shoes from "../../public/images/shoes.jpg";
import TopAds from "../../comp/topAds";
import ProductCard from "../../comp/ProductCard";
import ProductsGrid from "../../comp/productsGrid";
const Store = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="store-header">
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex">
                        <div className="store-dp">
                        <Image alt="" src={shoes} className="store-dp" width={100} height={100} />

                        </div>
                        <div className="store-detail">
                        <h2>Digital Educational Resources</h2>
                        <a href="#">Category</a>
                        <p className="rating">(4.9) Rating</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-right">
                    <button className="btn btn-chat"><i className="bi bi-chat"></i> Chat</button>
                    <button className="btn btn-follow">400 Follow</button>
                </div>

            </div>
        </div>
        <div>
          <TopAds/>
        </div>
        <div >
          <ProductsGrid/>
        </div>
      </div>
    </>
  );
};

export default Store;
