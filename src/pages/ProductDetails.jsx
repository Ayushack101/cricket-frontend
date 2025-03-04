import React from "react";

import img1 from "../assets/img/product-img/nike.jpg";
import img2 from "../assets/img/product-img/n-1.jpg";
import img3 from "../assets/img/product-img/nn1.jpg";
import img4 from "../assets/img/product-img/n-2.jpg";

const ProductDetails = () => {
  return (
    <div>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12">
              <div className="easyzoom easyzoom--overlay easyzoom--with-thumbnails">
                <a href={img1}>
                  <img src={img1} alt className="large-image" />
                </a>
              </div>
              <ul className="thumbnails">
                <li>
                  {/* <a href={img1} data-standard={img1}> */}
                  <img src={img1} alt />
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href={img2} data-standard={img2}> */}
                  <img src={img2} alt />
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href={img3} data-standard={img3}> */}
                  <img src={img3} alt />
                  {/* </a> */}
                </li>
                <li>
                  {/* <a href={img4} data-standard={img4}> */}
                  <img src={img4} alt />
                  {/* </a> */}
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <div className="top-txt">
                <p>
                  <span>
                    <i className="fa-solid fa-check" />
                  </span>{" "}
                  In stock{" "}
                  <span className="icon">
                    <i className="fa-regular fa-heart" />
                  </span>
                </p>
                <h3>NIKE X</h3>
                <h4>
                  ₹ 1900{" "}
                  <span>
                    <del>₹ 2900</del>
                  </span>
                </h4>
              </div>
              <hr />
              <div className="size">
                <p className="para">Select Size</p>
                <span className="size-txt">31</span>
                <div className="color mt-5">
                  <span>
                    <input type="color" />
                  </span>
                  <label htmlFor="for">Select color</label>
                  <p>
                    Only <span>item(s)</span> left in stock
                  </p>
                </div>
                <hr />
                <span className="checkbox">
                  <input type="checkbox" className="me-2" />I agree with the
                  terms and conditions
                </span>
              </div>
              <div className="quality mt-4">
                <div className="quantity-container">
                  <label htmlFor="quantity">Quantity:</label>
                  <div className="quantity-controls">
                    <button id="decrease" className="quantity-btn">
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      defaultValue={1}
                      min={1}
                      readOnly
                    />
                    <button id="increase" className="quantity-btn">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="add-to-cart mt-5">
                <a href="#" className="btn btn-dark w-100">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*tabs*/}
        <div className="container">
          <hr />
        </div>
        <div className="container-fluid text-center py-5">
          <div className="container">
            <ul className="tabs">
              <li className="current" data-tab="tab-1">
                Description
              </li>
              <li data-tab="tab-2">Product Features</li>
              <li data-tab="tab-3">Return</li>
            </ul>
            <div id="tab-1" className="tab-content current">
              <p>Description is required</p>
            </div>
            <div id="tab-2" className="tab-content">
              <p>no featuress</p>
            </div>
            <div id="tab-3" className="tab-content">
              <p>no policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
