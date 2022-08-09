// import a from 'next/a';
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from 'next/router'
// import Link from 'next/link';
import Link from "next/link";

const Header = () => {
  const router = useRouter()
  const [IssearchResults, setIssearchResults] = useState(false);
  const [IsSelectCat, setIsSelectCat] = useState(false);
  const [selectedCat, setselectedCat] = useState("All");
  const [width, setwidth] = useState();
  // const { height, width } = useWindowDimensions();
  const ref = useRef(null);
  const [SelectCatwidth, setSelectCatWidth] = useState(0);
  useLayoutEffect(() => {
    setSelectCatWidth(ref.current.offsetWidth);
  }, [selectedCat]);
  const updateDimensions = () => {
    setwidth(window.innerWidth);
    // setHeight(window.innerHeight);
}
useEffect(() => {
  setwidth(window.innerWidth);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

function search() {
  router.push('result/?sq=10', undefined, { shallow: true })
  
}
var isDropsearchBar = width < 1000;
  return (
    <>
      {/* <div className="navbar">
        <div className="container">
          <div className="navs">
            <a herf="#" className="nav-as">
            SELL ON KhpalDukaan
            </a>
            <a herf="#" className="nav-as">
            CUSTOMER CARE
            </a>
            <a herf="#" className="nav-as">
            TRACK MY ORDER
            </a>
          </div>
        </div>
      </div> */}
      <>
        <div className="header">
          <div className="header-wrap">
            <a href="/" className="logo">
              Khpal<span>Dukaan </span>
            </a>
            {!isDropsearchBar && <div className="search-bar">
    
              <div
                className="select-cat"
                ref={ref}
                onClick={() => setIsSelectCat(!IsSelectCat)}
              >
                <p>{selectedCat}</p> <i className="bi bi-caret-down-fill"></i>
              </div>
              {IsSelectCat && (
                <>
                  <div
                    className="overlay"
                    onClick={() => setIsSelectCat(false)}
                  ></div>
                  <div
                    className="search-cats"
                    onClick={() => setIsSelectCat(false)}
                  >
                    <ul>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("All")}
                      >
                        All
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Gaming accessories")}
                      >
                        Gaming accessories
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Electronics")}
                      >
                        Electronics
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Health & Personal Care")}
                      >
                        Health & Personal Care
                      </li>
                    </ul>
                  </div>
                </>
              )}
              <input
                type={"text"}
                className="search-input"
                placeholder="search..."
                onClick={() => setIssearchResults(!IssearchResults)}
              />
              <button className="search-submit-btn " onClick={()=> search()}>
                {/* <Search color="#ffffff" width="24px" height="24px" /> */}
                <i className="bi bi-search"></i>
              </button>
              {IssearchResults && (
                <>
                  <div
                    className="overlay"
                    onClick={() => setIssearchResults(false)}
                  ></div>
                  <div
                    className="search-result"
                    style={{ left: SelectCatwidth }}
                  >
                    <ul>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>}

            <div className="nav">
              <>
                <a href="#" className="btn btn-icon active">
                  <i className="bi bi-house"></i>
                  <p className="tooltip">home</p>
                </a>
                <button className="btn btn-icon">
                  <i className="bi bi-heart"></i>
                  <p className="tooltip">Wishlist</p>

                </button>
                <a href="/cart" className="btn btn-icon">
                  <i className="bi bi-cart"></i>
                  <p className="tooltip">Cart</p>

                </a>
                <a href="/cart" className="btn btn-icon">
                  <i className="bi bi-person-circle"></i>
                  <span className="tooltip">Account</span>

                </a>
              </>
            </div>
          </div>
          {/* isDropsearchBar && <div className="search-bar" style={{marginBottom: "1rem"}}>
             
              <div
                className="select-cat"
                ref={ref}
                onClick={() => setIsSelectCat(!IsSelectCat)}
              >
                <p>{selectedCat}</p> <i className="bi bi-caret-down-fill"></i>
              </div>
              {IsSelectCat && (
                <>
                  <div
                    className="overlay"
                    onClick={() => setIsSelectCat(false)}
                  ></div>
                  <div
                    className="search-cats"
                    onClick={() => setIsSelectCat(false)}
                  >
                    <ul>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("All")}
                      >
                        All
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Gaming accessories")}
                      >
                        Gaming accessories
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Electronics")}
                      >
                        Electronics
                      </li>
                      <li
                        className="search-item"
                        onClick={() => setselectedCat("Health & Personal Care")}
                      >
                        Health & Personal Care
                      </li>
                    </ul>
                  </div>
                </>
              )}
              <input
                type={"text"}
                className="search-input"
                placeholder="search..."
                onClick={() => setIssearchResults(!IssearchResults)}
              />
              <button className="search-submit-btn ">
                
                <i className="bi bi-search"></i>
              </button>
              {IssearchResults && (
                <>
                  <div
                    className="overlay"
                    onClick={() => setIssearchResults(false)}
                  ></div>
                  <div
                    className="search-result"
                    style={{ left: SelectCatwidth }}
                  >
                    <ul>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                      <li className="search-item">
                        <i className="bi bi-search"></i> dasdasda
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>*/}
        </div>
        {/* <Outlet/> */}
      </>
    </>
  );
};

export default Header;
