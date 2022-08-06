import Head from "next/head";
import Image from "next/image";
import Header from "../comp/header";
import Stories from "../comp/stories";
import TopAds from "../comp/topAds";
import second from '../public/images/furnitures.jpg'
import banner1 from '../public/images/banner1.webp'
import banner from '../public/images/banner.jpg'

import banner2 from '../public/images/banner2.webp'
import CategoriesSlider from "../comp/CategoriesSlider";
import LandingStores from "../comp/LandingStores";
import ProductCard from "../comp/ProductCard";
import CategoryProducts from "../comp/categoryProduct";
import ProductsGrid from "../comp/productsGrid";


// import cover from "./images/cover.jpg";

export default function Home() {
  console.log(banner);
  return (
    <>
      {/* <Promotion/> */}
<div className="content ">

      <div className="container">
      <TopAds />
      <Stories/>
        <CategoriesSlider/>
        <LandingStores/>
        <CategoryProducts/>
        <CategoryProducts/>
        <CategoryProducts/>
      <h1 style={{ textAlign: "center" }}>Top Seller</h1>

        <ProductsGrid/>
        {/* <ProductCard/> */}
      </div>
      </div>
    </>
  );
}
