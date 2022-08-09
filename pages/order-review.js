import React from "react";

const OrderReview = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="order-Complition">
          <i className="bi bi-clock-fill icon"></i>
          <h3>Thank you for purchase!</h3>
          <p className="on">
            Your order number is <strong>12321312312321312</strong>
          </p>
          <div className="msg">
            <p>Please have this amount ready on delivery day.</p>
            <h3 className="price">Rs. 500</h3>
          </div>
        
        <div className="order-mini-detail">
          <div className="summary-card">
            <div className="sc-body">
              <h3>Summary</h3>
              <div className="d-flex justify-content-between">
                <p>
                  items Total<button className="btn btn-items">(1 item)</button>{" "}
                </p>
                <p className="price">Rs. 500</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping Fee </p>
                <p className="price">Rs. 100</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Delivery Date </p>
                <p className="price">Est. 11 Aug - 15 Aug</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total: </p>
                <p className="price">Rs. 600</p>
              </div>
              <hr />

            </div>
            <div className="sc-footer" >
                for more details, track your delivery status under <strong>My Account <i className="bi bi-chevron-right"></i> orders</strong>
              <a href="/order-review" className="btn btn-filled">
                View Order
              </a>
            </div>
          </div>
        </div>
        <button className="btn btn-filled">
            Continue Shopping
        </button>
      </div>
      </div>
    </div>
  );
};

export default OrderReview;
