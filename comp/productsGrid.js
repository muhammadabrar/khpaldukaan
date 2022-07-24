import React, { useState } from "react";
import ProductCard from "./ProductCard";
import books from '../public/images/books.jpg'
import computer_laptops from '../public/images/computer_laptops.jpg'
import fashions from '../public/images/fashions.jpg'
import furnitures from '../public/images/furnitures.jpg'
import jewlery from '../public/images/jewlery.jpg'
import shoes from '../public/images/shoes.jpg'
import shoes1 from '../public/images/shoes1.jpg'
import sports from '../public/images/sports.jpg'


export default function ProductsGrid() {
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
          Title: "Wine - Puligny Montrachet A. sds dkasjhd adsjakshd",
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
    <>
      <h1 style={{ textAlign: "center" }}>Top Seller</h1>
      <div className="ProductsGrid">
        {products?.map((item, index) => (
          <ProductCard
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
    </>
  );
}
