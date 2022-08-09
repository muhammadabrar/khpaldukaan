import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import shoes from "../public/images/shoes.jpg";

const Cart = () => {
  const [checked, setchecked] = useState(false);
    const summary = useRef(null)
    const [summaryHeight, setsummaryHeight] = useState();
// useEffect(() => {
//     setsummaryHeight(summary.current.offsetHeight)
// }, []);
useLayoutEffect(() => {
    setsummaryHeight(summary.current.offsetHeight)
  }, [summary]);
  return (
    <div className="content"  style={{marginBottom: setsummaryHeight}}>
      <div className="container">
        <h2 className="page-title">Shopping Cart (11)</h2>
        <hr />
        <div className="store-products">
          <div className="store d-flex justify-content-between">
            <div className="d-flex justify-content-between align-item-center">
              <div
                className={`check ${checked && "active"}`}
                onClick={() => setchecked(!checked)}
              >
                {checked && <i className="bi bi-check"></i>}
              </div>
              <a href="/store">
                <i className="bi bi-shop-window"></i> store title
              </a>
            </div>
            <i className="bi bi-dash dash"></i>
          </div>
          <div className="cart-product-card">
            <div className="cpc-body">
              <div
                className={`check ${checked && "active"}`}
                onClick={() => setchecked(!checked)}
              >
                {checked && <i className="bi bi-check"></i>}
              </div>
              <div className="product">
                <div className="p-image">
                  <Image
                    src={shoes}
                    layout="fixed"
                    className="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-info">
                  <div className="d-flex justify-content-between">
                    <p>Pork - Bacon, Double Smoked</p>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="qty d-flex justify-content-between">
                    <p className="price">
                      Rs.500<br/>
                      <small>
                        <del>Rs. 600</del>
                      </small>
                    </p>
                    <div className="qty-input d-flex">
                      <button className="btn">-</button>
                      <input type={"number"} value={1} />
                      <button className="btn">+</button>
                    </div>
                  </div>
                  <p className="shipping-price">shipping: Rs. 100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-product-card">
            <div className="cpc-body">
              <div
                className={`check ${checked && "active"}`}
                onClick={() => setchecked(!checked)}
              >
                {checked && <i className="bi bi-check"></i>}
              </div>
              <div className="product">
                <div className="p-image">
                  <Image
                    src={shoes}
                    layout="fixed"
                    className="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-info">
                  <div className="d-flex justify-content-between">
                    <p>Pork - Bacon, Double Smoked</p>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="qty d-flex justify-content-between">
                    <p className="price">
                      Rs.500                      <br/>

                      <small>
                        <del>Rs. 600</del>
                      </small>
                    </p>
                    <div className="qty-input d-flex">
                      <button className="btn">-</button>
                      <input type={"number"} value={1} />
                      <button className="btn">+</button>
                    </div>
                  </div>
                  <p className="shipping-price">shipping: Rs. 100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-product-card">
            <div className="cpc-body">
              <div
                className={`check ${checked && "active"}`}
                onClick={() => setchecked(!checked)}
              >
                {checked && <i className="bi bi-check"></i>}
              </div>
              <div className="product">
                <div className="p-image">
                  <Image
                    src={shoes}
                    layout="fixed"
                    className="img"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="product-info">
                  <div className="d-flex justify-content-between">
                    <p>Pork - Bacon, Double Smoked</p>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="qty d-flex justify-content-between">
                    <p className="price">
                      Rs.500
                      <br/>
                      <small>
                        <del>Rs. 600</del>
                      </small>
                    </p>
                    <div className="qty-input d-flex">
                      <button className="btn">-</button>
                      <input type={"number"} value={1} />
                      <button className="btn">+</button>
                    </div>
                  </div>
                  <p className="shipping-price">shipping: Rs. 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="" style={{height: `${summaryHeight}px`}}>
   
</div>

        <div className="summary" ref={summary}>
          <div className="container">
            <div className="summary-card">
              <div className="sc-body">
                <h3>Summary</h3>
                <div className="d-flex justify-content-between">
                  <p>Subtotal: </p>
                  <p className="price">Rs. 500</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping Fee: </p>
                  <p className="price">Rs. 100</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Total: </p>
                  <p className="price">Rs. 600</p>
                </div>
              </div>
              <div className="sc-footer">
                <a href="/" className="btn">
                  Continue Shopping
                </a>
                <a href="/checkout" className="btn btn-filled">
                  Checkout (0)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
