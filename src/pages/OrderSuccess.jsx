import React from "react";
import { Link } from "react-router-dom";
import OrderSuccessGif from "../assets/img/OrderSuccesGif.gif"; // Import the GIF

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="card text-center p-4" style={{ maxWidth: 500 }}>
          <div className="card-body">
            <img
              src={OrderSuccessGif}
              alt="Order Success"
              style={{ width: "130px", height: "130px" }}
            />

            <h2 className="mt-3">Thank you for your purchase</h2>
            <p className="text-muted">
              Your order has been placed successfully.
            </p>
            <div className="border-top pt-3">
              <p className="fw-bold mb-1">
                Order ID: <span className="text-primary">1647629329</span>
              </p>
              <p className="mb-1">
                Expected Delivery:
                <span className="text-success"> 3-5 Business Days</span>
              </p>
            </div>
            <div className="mt-4">
              <Link to={"/"} className="btn-order mt-3">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
