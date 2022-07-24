import React from 'react'
import Image from "next/image";
import shoes from '../public/images/shoes.jpg'
import shoes1 from '../public/images/shoes1.jpg'
import furnitures from '../public/images/furnitures.jpg'


export default function Stories() {
  return (
    <div className="top3-storiess">
    <>
      <a href="#" className="stories-card " data-aos="fade-up" data-aos-delay={0}>
      <Image src={shoes} className="stories-card-img" layout='fill'/>

      </a>
    </>
    <>
      <a href="#" className="stories-card " data-aos="fade-up" data-aos-delay={100}>
      <Image src={shoes1} className="stories-card-img" layout='responsive'/>


      </a>
    </>
  
    <>
      <a href='#' className="stories-card" data-aos="fade-up" data-aos-delay={200}>
      <Image src={furnitures} layout='fill' className="stories-card-img" />
      
      </a>
    </>
  </div>
  )
}
