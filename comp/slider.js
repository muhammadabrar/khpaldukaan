import React from "react";
import Image from "next/future/image";

import { useEffect, useState, useRef, useMemo  } from "react";

import banner1 from "../public/images/banner1.webp";
import banner2 from "../public/images/banner2.webp";

const Promotion = () => {
  const [activeSlider, setactiveSlider] = useState(1);
  const listRef = useRef();
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();

  const [isMoved, setIsMoved] = useState(false);
  const [scrollX, setscrollX] = useState(0);

  useEffect(() => {
    //    setTimeout(() => {
    //      setactiveSlider(activeSlider < 3 ? activeSlider+1 : 0)
    //    }, 3000);
  }, [activeSlider]);


  const handleTouchMove = (e) => {
//     const window = e.currentTarget;
//     // if (window.setscrollX > "100vh") {
//     //   console.log("scrolling up");
//     // } else if (scrollX < window.scrollX) {
//     //   console.log("scrolling down");
//     // }
      console.log(e);
    //   setscrollX(listRef.current.scrollLeft);
    // setscrollX(e.target);
  };

  useEffect(() => {
    setscrollX(listRef.current.getBoundingClientRect().x);
  }, []);
  const scrollHandler = _ => {
    console.log(listRef.current.getBoundingClientRect());
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const handleClick = (direction) => {
    // setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x;
    console.log(Ref1.current && "1");
    console.log(Ref2.current && "2");
    console.log(Ref3.current && "3");

    if (direction === "left" && activeSlider > 1) {
      setactiveSlider(activeSlider - 1);
      switch (activeSlider-1) {
        case 1:
          Ref1.current?.scrollIntoView({ behavior: "smooth" });
          
          break;
        case 2:
          Ref2.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case 3:
          Ref3.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }
    if (direction === "right" && activeSlider < 3) {
      setactiveSlider(activeSlider + 1);
    //   listRef.current.style.transform = `translateX(${-100 * activeSlider}vw)`;
    switch (activeSlider+1) {
        case 1:
          Ref1.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case 2:
          Ref2.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case 3:
          Ref3.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }
    console.log(listRef.current.scrollLeft)

  };

  return (
    <div className="test">
      <>
        <div class="slider" ref={listRef} onScrollLeft={e => handleTouchMove(e)}>
          <div class="slider-item" ref={Ref1}>
            <a href="#">
              <Image alt="" src={banner1} layout="responsive" className="slider-img" />
            </a>
          </div>
          <div class="slider-item " ref={Ref2}>
            <a href="#">
              <Image alt="" src={banner2} layout="responsive" className="slider-img" />
            </a>
          </div>
          <div class="slider-item " ref={Ref3}>
            <a href="#">
              <Image alt="" src={banner1} layout="responsive" className="slider-img" />
            </a>
          </div>
         
        </div>
        
      </>
      
      <div className="slider-btns">
          
          <button className="btn btn-silder" onClick={() => handleClick("left")}><i className="bi bi-chevron-left"></i></button>
          <button className="btn btn-silder" onClick={() => handleClick("right")}><i className="bi bi-chevron-right"></i></button>
    
              </div>
    </div>
  );
};

export default Promotion;


