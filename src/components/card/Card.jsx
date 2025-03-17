import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  pid,
  img1,
  product_name,
  product_current_price,
  product_old_price,
}) => {
  // Calculate discount percentage
  const discountPercentage =
    product_old_price > product_current_price
      ? Math.round(
          ((product_old_price - product_current_price) / product_old_price) *
            100
        )
      : 0;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/productdetails/${pid}`}>
        <div className="side-img">
          <div className="right-img" style={{ height: "300px" }}>
            <img
              src={img1}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              className="img-fluid"
              alt="Image 1"
            />
          </div>
          <div className="cart-info">
            <p style={{ marginBottom: 2 }}>
              {product_name.length > 30
                ? product_name.substring(0, 30) + "..."
                : product_name}
            </p>
            <span className="my-span">₹ {product_current_price}</span>
            <span>
              <del>₹ {product_old_price}</del>
            </span>
            {discountPercentage > 0 && (
              <span className="price-off">{discountPercentage}% off</span>
            )}
            <p style={{ marginBottom: 2, fontSize: "13px" }}>Free Delivery</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
