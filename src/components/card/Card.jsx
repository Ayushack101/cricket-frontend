import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  pid,
  img1,
  product_name,
  product_current_price,
  product_old_price,
}) => {
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
          <div className="silder-txt mt-3">
            <p style={{ marginBottom: 0 }}>{product_name}</p>
            <br />
            <span className="my-span mt-3">Rs. {product_current_price}</span>
            <span>
              <del>Rs. {product_old_price}</del>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
