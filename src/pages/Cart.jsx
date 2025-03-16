import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchCartById,
  fetchCartLocalData,
  removeFromCart,
  setRemoveFromCartError,
  setRemoveFromCartSuccess,
} from "../redux/CartSlice/CartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const { user } = useSelector((state) => state.auths);
  const {
    cartList,
    cartStatus,
    cartLocalData,
    removeFromCartSuccess,
    removeFromCartError,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      // fetching local cart data
      const storedCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (storedCart) {
        dispatch(fetchCartLocalData(storedCart));
      }
    }
    if (user) {
      dispatch(fetchCartById());
    }
  }, [user]);

  // remove item from cart
  const handleRemoveItem = (pid) => {
    // remove from cart locally
    if (!user) {
      const storedCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const updatedCart = storedCart.filter((item) => item.pid !== pid);
      if (updatedCart) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success("Product removed from the cart!");
        dispatch(fetchCartLocalData(updatedCart));
      }
    }
    // remove from cart server side
    if (user) {
      dispatch(removeFromCart(pid));
    }
  };

  useEffect(() => {
    if (removeFromCartSuccess) {
      toast.success("Product removed from the cart!");
      dispatch(setRemoveFromCartSuccess());
      if (user) {
        dispatch(fetchCartById(user?.user?.id));
      }
    }
    if (removeFromCartError) {
      toast.warn(removeFromCartError);
      dispatch(setRemoveFromCartError());
    }
  }, [removeFromCartSuccess, removeFromCartError]);

  const cartItems = user ? cartList : cartLocalData || [];

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
      <section className="cart px-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="main-heading mb-5">Shopping Cart</h1>

          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{ width: "100%" }}
          >
            <div className="progress" style={{ height: 3, width: "30%" }}>
              <div className="progress-bar" style={{ width: "100%" }} />
            </div>
            <i className="fa-solid fa-truck-fast truck-icon" />
          </div>

          <div className="small-heading small-head">
            Congratulations, you've got free shipping!
          </div>

          {cartItems.length === 0 ? (
            <p className="pt-4">Your Cart is Empty!</p>
          ) : (
            <div className="cart-table">
              <ul className="pb-4 border-bottom d-flex justify-content-between align-items-center cart-table-header">
                <li>Product</li>
                <li className="quantity-th">Quantity</li>
                <li>Total</li>
              </ul>

              {cartItems?.map((item, index) => (
                <ul
                  key={index}
                  className="pt-4 d-flex justify-content-between align-items-center cart-table-row"
                >
                  <li className="table-product">
                    <div className="table-product-img pe-3">
                      <img
                        src={item?.product?.product_featured_pic || ""}
                        alt={item?.product?.product_name}
                      />
                    </div>
                    <div className="table-product-details">
                      <div>
                        <p style={{ marginBottom: 0 }}>
                          <Link to={`/productdetails/${item?.product?.id}`}>
                            {item?.product?.product_name}
                          </Link>
                        </p>
                      </div>
                      <div>₹ {item?.product?.product_current_price} </div>
                      {item?.size_name && <div>Size: {item?.size_name}</div>}
                      {item?.color_name && <div>Color: {item?.color_name}</div>}
                    </div>
                  </li>
                  <li className="table-quantity">
                    <div className="quantity mb-1 d-flex justify-content-between align-items-center">
                      {item?.product_quantity}
                    </div>
                    <div
                      className="product-remove"
                      onClick={() => {
                        handleRemoveItem(item?.product?.id);
                      }}
                    >
                      Remove
                    </div>
                  </li>
                  <li className="product-price">
                    ₹
                    {item?.product_quantity *
                      item?.product?.product_current_price}
                  </li>
                </ul>
              ))}

              <div className="subtotal mt-4 mb-5 border-top d-flex justify-content-end align-items-center">
                <div className="pt-4">
                  <h4 className="small-heading">
                    Subtotal: ₹
                    {cartItems.reduce(
                      (acc, item) =>
                        acc +
                        item?.product?.product_current_price *
                          item?.product_quantity,
                      0
                    )}
                  </h4>
                  <p className="taxes">
                    Taxes and shipping calculated at checkout
                  </p>
                  <Link to={"/secured/checkout"}>
                    <div className="go-to-checkout">CHECK OUT</div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
