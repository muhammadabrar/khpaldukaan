import React from "react";

const Checkout = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="shipping-card">
          <div className="shipping-card-header">
            <h3>Shipping Info</h3>
            <div>
              <button className="btn"> Change</button>
              <button className="btn btn-add-address">
                <i className="bi bi-plus-lg"></i> Add New Address
              </button>
            </div>
          </div>
          <div className="shipping-card-body">
            <>
              <div className="shipping">
                <div className="item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div className="value">
                    <h4>Muhammad Abrar</h4>
                    <p>
                      <span className="badge">Home</span> Maini, Swabi, Khyber
                      Pakhtunkhwa, Pakistan peshawar, Pakistan, Pakistan, 23450{" "}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <i className="bi bi-phone"></i>

                  <p className="value">03178303217</p>
                </div>
                <div className="item">
                  <i className="bi bi-envelope-fill"></i>

                  <p className="value">muhammadabrar.work@gmail.com</p>
                </div>
              </div>
            </>
          </div>
        </div>
        <div className="summary">
          <div className="container">
            <div className="summary-card">
              <div className="sc-body">
                <h3>Summary</h3>
                <div className="d-flex justify-content-between">
                  <p>items Total<button className="btn btn-items" >(1 item)</button> </p>
                  <p className="price">Rs. 500</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping Fee </p>
                  <p className="price">Rs. 100</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Total: </p>
                  <p className="price">Rs. 600</p>
                </div>
              </div>
              <div className="sc-footer">
                
                <a href="/order-review" className="btn btn-filled">
                  Proceed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
