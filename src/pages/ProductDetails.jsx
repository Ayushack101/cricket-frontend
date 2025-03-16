import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/ProductSlice/ProductSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
  addToCart,
  removeAddToCartError,
  removeAddToCartSuccess,
} from "../redux/CartSlice/CartSlice";

const ProductDetails = () => {
  const { pid } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { user } = useSelector((state) => state.auths);

  const dispatch = useDispatch();
  const { productDetailsStatus, productDetails } = useSelector(
    (state) => state.products
  );

  const { addToCartSuccess, addToCartError } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(fetchProductById(parseInt(pid)));
  }, [pid, dispatch]);

  // Set default size and color
  useEffect(() => {
    if (productDetails) {
      if (productDetails?.size && productDetails?.size?.length > 0) {
        setSelectedSize(productDetails?.size[0]?.size_id);
      } else {
        setSelectedSize("");
      }
      if (productDetails?.color && productDetails?.color?.length > 0) {
        setSelectedColor(productDetails?.color[0]?.color_id);
      } else {
        setSelectedColor("");
      }
    }
  }, [productDetails]);

  // Calculate discount percentage
  const discountPercentage =
    productDetails &&
    productDetails.product_old_price > productDetails.product_current_price
      ? Math.round(
          ((productDetails.product_old_price -
            productDetails.product_current_price) /
            productDetails.product_old_price) *
            100
        )
      : 0;

  // Handlers for quantity plus and minus
  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityIncrease = () => {
    // quantity can not be increased more than the available quantity
    if (quantity >= productDetails?.product_quantity) {
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  // Handler for Add To Cart
  const handleAddToCart = () => {
    // product added to local storage if user is not logged in
    if (!user) {
      // Retrieve existing cart from local storage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const item = {
        pid: productDetails?.id,
        size_id: selectedColor ? parseInt(selectedSize) : "",
        color_id: selectedColor ? parseInt(selectedColor) : "",
        quantity: quantity,
      };
      // Already existing item in cart
      const existingItem = cart.find((cartItem) => cartItem.pid === item.pid);
      if (existingItem) {
        toast.warning("Already exist in cart!");
        return;
      }
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart!");
    }
    if (user) {
      // product added to cart if user is logged in
      const item = {
        pid: productDetails?.id,
        size_id: selectedColor ? parseInt(selectedSize) : "",
        color_id: selectedColor ? parseInt(selectedColor) : "",
        quantity: quantity,
      };
      dispatch(addToCart(item));
    }
  };

  // Toast notification for add to cart success and error
  useEffect(() => {
    if (addToCartSuccess) {
      toast.success("Product added to cart!");
      dispatch(removeAddToCartSuccess());
    }
    if (addToCartError) {
      toast.warning(addToCartError);
      dispatch(removeAddToCartError());
    }
  }, [addToCartSuccess, addToCartError, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <section className="product-display px-5 pt-5">
        <div className="row gx-3">
          <div className="col-lg-7 col-12">
            <div className="wrapper" id="product-imgs">
              <div className="big-img">
                <img
                  src={productDetails?.product_featured_pic}
                  className="display-img"
                />
              </div>
              <div className="img-selection">
                <div className="img-thumbnail selected">
                  <img
                    src={productDetails?.product_featured_pic}
                    width="100%"
                  />
                </div>
                {productDetails?.images?.map((img, index) => (
                  <div key={index} className="img-thumbnail ">
                    <img src={img?.product_image_url} width="100%" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 ps-0 ps-lg-5 pt-5 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className="product-details">
                {productDetails?.product_quantity > 0 ? (
                  <div className="product-stock mt-2">
                    <i className="fa-solid fa-check pe-2" /> In Stock
                  </div>
                ) : (
                  <div className="product-stock mt-2" style={{ color: "red" }}>
                    <i className="fa-solid fa-times pe-2" />
                    Out of stock
                  </div>
                )}

                {/* <div className="product-review"></div> */}
                <div className="product-heading pt-1">
                  {productDetails?.product_name}
                </div>
                <div className="product-price pt-1">
                  ₹{productDetails?.product_current_price}
                  <span className="ps-1">
                    ₹ {productDetails?.product_old_price}
                  </span>
                  {discountPercentage > 0 && (
                    <div className="price-off">({discountPercentage}% OFF)</div>
                  )}
                </div>
                <div>
                  <span>(Inclusive of all taxes)</span>
                </div>
                {/* <div className="vendor-name small-heading pt-1">
                  By <span> Wpbingo</span>
                </div> */}
                <div className="border-top mt-4" />
                {productDetails?.size?.length > 0 && (
                  <div className="mt-4">
                    <label htmlFor="size_id">
                      <h6 style={{ fontWeight: 500 }}>Select Size</h6>
                    </label>
                    <select
                      id="size_id"
                      name="size_id"
                      className="form-control select2"
                      style={{ width: "auto" }}
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      {productDetails.size.map((size, index) => (
                        <option key={index} value={size.size_id}>
                          {size.size_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {productDetails?.color?.length > 0 && (
                  <div className="mt-4">
                    <label htmlFor="color_id">
                      <h6 style={{ fontWeight: 500 }}>Select Color</h6>
                    </label>
                    <select
                      id="color_id"
                      name="color_id"
                      className="form-control select2"
                      style={{ width: "auto" }}
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      {productDetails.color.map((color, index) => (
                        <option key={index} value={color.color_id}>
                          {color.color_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="left-stock pt-3">
                  Only <span> {productDetails?.product_quantity} item(s)</span>
                  left in stock
                  <div
                    className="progress mt-3"
                    role="progressbar"
                    aria-label="Example 1px high"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ height: 3 }}
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: "35%",
                        backgroundColor: "red !important",
                      }}
                    />
                  </div>
                </div>
                <div className="tac-btn pt-3 d-flex justify-content-start align-items-center ">
                  <span>
                    <input type="checkbox" className="me-2" />
                  </span>
                  I agree with the
                  <span className="tac-link ms-1">terms and conditions</span>
                </div>
                <div className="product-goto-cart d-flex justify-content-center align-items-center mt-4">
                  <div className="quantity me-2 d-flex justify-content-between align-items-center">
                    <span id="quantity-minus">
                      <i
                        className="fa-solid fa-minus"
                        onClick={handleQuantityDecrease}
                      />
                    </span>
                    <span id="quantity">{quantity}</span>
                    <span id="quantity-plus">
                      <i
                        className="fa-solid fa-plus"
                        onClick={handleQuantityIncrease}
                      />
                    </span>
                  </div>
                  <button
                    id="addToCart"
                    className="add-to-cart me-2"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                  <div className="add-wishlist d-flex justify-content-center align-items-center">
                    <i className="fa-regular fa-heart" />
                  </div>
                </div>
                {/* share the product */}
                <div className="share mt-3">
                  Share This Product <br />
                  <div
                    className="sharethis-inline-share-buttons st-left st-has-labels  st-inline-share-buttons st-animated"
                    id="st-1"
                  >
                    <div
                      className="st-btn st-first"
                      data-network="facebook"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        alt="facebook sharing button"
                        src="https://platform-cdn.sharethis.com/img/facebook.svg"
                      />
                      <span className="st-label">Share</span>
                    </div>
                    <div
                      className="st-btn"
                      data-network="twitter"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        alt="twitter sharing button"
                        src="https://platform-cdn.sharethis.com/img/twitter.svg"
                      />
                      <span className="st-label">Tweet</span>
                    </div>
                    <div
                      className="st-btn"
                      data-network="pinterest"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        alt="pinterest sharing button"
                        src="https://platform-cdn.sharethis.com/img/pinterest.svg"
                      />
                      <span className="st-label">Pin</span>
                    </div>
                    <div
                      className="st-btn st-remove-label"
                      data-network="email"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        alt="email sharing button"
                        src="https://platform-cdn.sharethis.com/img/email.svg"
                      />
                      <span className="st-label">Email</span>
                    </div>
                    <div
                      className="st-btn st-last st-remove-label"
                      data-network="sharethis"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        alt="sharethis sharing button"
                        src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                      />
                      <span className="st-label">Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details */}
      <section className="product-details-bottom px-5 border-top border-bottom">
        <div className="my-5">
          <ul
            className="nav nav-pills mb-5 d-flex justify-content-center align-items-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item me-2" role="presentation">
              <div
                className="nav-link active main-heading"
                id="pills-description-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-description"
                role="tab"
                aria-controls="pills-description"
                aria-selected="true"
              >
                Description
              </div>
            </li>
            {/* <li class="nav-item me-2" role="presentation">
              <div class="nav-link main-heading" id="pills-review-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-review" role="tab" aria-controls="pills-review" aria-selected="true">
                  Review
              </div>
          </li> */}
            <li className="nav-item me-2" role="presentation">
              <div
                className="nav-link main-heading"
                id="pills-shipping-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-shipping"
                role="tab"
                aria-controls="pills-shipping"
                aria-selected="true"
              >
                Product Features
              </div>
            </li>
            <li className="nav-item me-2" role="presentation">
              <div
                className="nav-link main-heading"
                id="pills-return-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-return"
                role="tab"
                aria-controls="pills-return"
                aria-selected="true"
              >
                Return
              </div>
            </li>
          </ul>
          <div className="tab-content tab-container" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-description"
              role="tabpanel"
              aria-labelledby="pills-description-tab"
              tabIndex={0}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: productDetails?.product_description,
                }}
              />
            </div>
            <div
              className="tab-pane fade review d-flex justify-content-center align-items-center"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
              tabIndex={0}
            >
              <div className="review-title">No Reviews</div>
              <div className="row gx-3">
                <div className="col-lg-4 col-12">
                  <div className="total-rating" />
                </div>
                <div className="col-lg-4 col-12">
                  <div className="5-strip-stars" />
                </div>
                <div className="col-lg-4 col-12">
                  <div className="write-review" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-shipping"
              role="tabpanel"
              aria-labelledby="pills-shipping-tab"
              tabIndex={0}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: productDetails?.product_features,
                }}
              />
            </div>
            <div
              className="tab-pane fade"
              id="pills-return"
              role="tabpanel"
              aria-labelledby="pills-return-tab"
              tabIndex={0}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: productDetails?.product_return_policy,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      <section class="related-products px-5">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="main-heading mb-5">You may also like</div>
          <div class="row pro gx-3 related-products-row"></div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
