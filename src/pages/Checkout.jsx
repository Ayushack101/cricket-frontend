import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeUserDeliveryAddressSuccess,
  userDeliveryAddress,
  userDetailsFun,
} from "../redux/AuthSlice/AuthSlice";
import { fetchCartById } from "../redux/CartSlice/CartSlice";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const {
    user,
    userInfo,
    userExtraInfo,
    userDelivertAddressLoading,
    userDeliveryAddressSuccess,
  } = useSelector((state) => state.auths);

  const { cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      user_d_name: userExtraInfo?.user_d_name || "",
      user_d_phone: userExtraInfo?.user_d_phone || "",
      user_d_address: userExtraInfo?.user_d_address || "",
      user_d_city: userExtraInfo?.user_d_city || "",
      user_d_state: userExtraInfo?.user_d_state || "",
      user_d_zip: userExtraInfo?.user_d_zip || "",
    },
  });

  useEffect(() => {
    if (userExtraInfo) {
      setValue("user_d_name", userExtraInfo.user_d_name || "");
      setValue("user_d_phone", userExtraInfo.user_d_phone || "");
      setValue("user_d_address", userExtraInfo.user_d_address || "");
      setValue("user_d_city", userExtraInfo.user_d_city || "");
      setValue("user_d_state", userExtraInfo.user_d_state || "");
      setValue("user_d_zip", userExtraInfo.user_d_zip || "");
    }
  }, [userExtraInfo, setValue]);

  // Calculate subtotal
  const subtotal = cartList?.reduce(
    (total, item) =>
      total + item?.product?.product_current_price * item?.product_quantity,
    0
  );

  const deliveryCharges = 0;
  const totalPayable = subtotal + deliveryCharges;

  useEffect(() => {
    dispatch(userDetailsFun(user?.user_id));
    dispatch(fetchCartById());
  }, [dispatch]);

  const onSubmit = async (data) => {
    dispatch(userDeliveryAddress(data));
  };

  useEffect(() => {
    if (userDeliveryAddressSuccess) {
      toast.success("Delivery Address Added Successfully");
      dispatch(removeUserDeliveryAddressSuccess());
      dispatch(userDetailsFun(user?.user_id));
    }
  }, [userDeliveryAddressSuccess, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <section className="checkout-nav d-flex justify-content-between align-items-center border-bottom">
        <div className="nav-heading">
          <h2>CRICKET HUB - Checkout</h2>
        </div>
        <div className="goto-cart">
          <Link to={"/cart"}>
            <i
              style={{ cursor: "pointer" }}
              className="fa-solid fa-cart-shopping"
            />
          </Link>
        </div>
      </section>
      <section className="checkout ">
        <div className="row gx-3">
          <div className="col-lg-7 col-12">
            {/* Login  */}
            <div className="login-info mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-3 d-flex justify-content-start align-items-center">
                  <span className="me-2">1</span>
                  LOGIN
                  <i className="fa-solid fa-check ps-2" />
                </h4>
                <button className="edit-btn">
                  <Link to={"/auth/signin"}>Change</Link>
                </button>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <p className="login-name pe-3">{userInfo?.username}</p>
                <p className="login-email">{userInfo?.email}</p>
              </div>
            </div>
            {/* Delivery Address  */}
            {userExtraInfo?.user_d_address && (
              <div className="login-info mt-4 ">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-3 d-flex justify-content-start align-items-center">
                    <span className="me-2">2</span>
                    DELIVERY ADDRESS
                    <i className="fa-solid fa-check ps-2" />
                  </h4>
                </div>
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                  <p className="login-name pe-3">
                    {userExtraInfo?.user_d_name}
                  </p>
                  <p className="login-name pe-3">
                    {userExtraInfo?.user_d_phone}
                  </p>
                  <p className="login-email">
                    {userExtraInfo?.user_d_address},{" "}
                    {userExtraInfo?.user_d_city}, {userExtraInfo?.user_d_state},{" "}
                    {userExtraInfo?.user_d_zip}
                  </p>
                </div>
              </div>
            )}
            {/* Save Delivery Address  */}
            {!userExtraInfo?.user_d_address && (
              <div className="delivery-address mt-4">
                <h4 className="mb-3">Delivery Address</h4>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row gx-3 my-3">
                    <div className="form-inputs col-lg-6 col-12">
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="user_d_name"
                        {...register("user_d_name", {
                          required: "Full Name is required!",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_name?.message}
                      </p>
                    </div>
                    <div className="form-inputs col-lg-6 col-12 mt-4 mt-lg-0">
                      <input
                        type="text"
                        placeholder="Phone"
                        name="user_d_phone"
                        {...register("user_d_phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message:
                              "Phone must be 10 digits and start with 9,8,7,6",
                          },
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_phone?.message}
                      </p>
                    </div>
                  </div>
                  <div className="row gx-3 my-3">
                    <div className="form-inputs col-12">
                      <input
                        type="text"
                        placeholder="Address"
                        name="user_d_address"
                        {...register("user_d_address", {
                          required: "Address is required",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_address?.message}
                      </p>
                    </div>
                  </div>
                  <div className="row gx-3 my-3">
                    <div className="form-inputs col-lg-6 col-12">
                      <input
                        type="text"
                        placeholder="City"
                        name="user_d_city"
                        {...register("user_d_city", {
                          required: "City is required",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_city?.message}
                      </p>
                    </div>
                    <div className="form-inputs col-lg-6 col-12 mt-4 mt-lg-0">
                      <input
                        type="text"
                        placeholder="State"
                        name="user_d_state"
                        {...register("user_d_state", {
                          required: "State is required",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_state?.message}
                      </p>
                    </div>
                  </div>
                  <div className="row gx-3 my-3">
                    <div className="form-inputs col-lg-12 col-12">
                      <input
                        type="text"
                        placeholder="Zip"
                        name="user_d_zip"
                        {...register("user_d_zip", {
                          required: "State is required",
                          pattern: {
                            value: /^[0-9]{5,6}$/,
                            message: "Invalid Zip Code!",
                          },
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_zip?.message}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-12 mb-3">
                      <button
                        className="deliver-btn"
                        type="submit"
                        name="user_delivery_address"
                        disabled={userDelivertAddressLoading}
                      >
                        {userDelivertAddressLoading
                          ? "Saving..."
                          : "SAVE AND DELIVER HERE"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {/* Edit Delivery Address  */}
            {userExtraInfo?.user_d_address && (
              <div className="delivery-address mt-4">
                <h4 className="mb-3">Edit Delivery Address</h4>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row gx-3 my-3">
                    {/* Full Name */}
                    <div className="form-inputs col-lg-6 col-12">
                      <input
                        type="text"
                        placeholder="Full Name"
                        {...register("user_d_name", {
                          required: "Full Name is required!",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_name?.message}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="form-inputs col-lg-6 col-12 mt-4 mt-lg-0">
                      <input
                        type="text"
                        placeholder="Phone"
                        {...register("user_d_phone", {
                          required: "Phone number is required!",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid phone number!",
                          },
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_phone?.message}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="row gx-3 my-3">
                    <div className="form-inputs col-12">
                      <input
                        type="text"
                        placeholder="Address"
                        {...register("user_d_address", {
                          required: "Address is required!",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_address?.message}
                      </p>
                    </div>
                  </div>

                  <div className="row gx-3 my-3">
                    {/* City */}
                    <div className="form-inputs col-lg-6 col-12">
                      <input
                        type="text"
                        placeholder="City"
                        {...register("user_d_city", {
                          required: "City is required!",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_city?.message}
                      </p>
                    </div>

                    {/* State */}
                    <div className="form-inputs col-lg-6 col-12 mt-4 mt-lg-0">
                      <input
                        type="text"
                        placeholder="State"
                        {...register("user_d_state", {
                          required: "State is required!",
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_state?.message}
                      </p>
                    </div>
                  </div>

                  <div className="row gx-3 my-3">
                    {/* Zip Code */}
                    <div className="form-inputs col-lg-12 col-12">
                      <input
                        type="text"
                        placeholder="Zip"
                        {...register("user_d_zip", {
                          required: "Zip code is required!",
                          pattern: {
                            value: /^[0-9]{5,6}$/,
                            message: "Invalid Zip Code!",
                          },
                        })}
                      />
                      <p className="input-error">
                        {errors?.user_d_zip?.message}
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="row">
                    <div className="col-lg-6 col-12 mb-3">
                      <button className="deliver-btn" type="submit">
                        {userDelivertAddressLoading
                          ? "Saving..."
                          : "SAVE AND DELIVER HERE"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* Payment Option  */}
            <div className="payment mt-4 my-4">
              <h4 className="mb-3">Payment</h4>
              <div className="row gx-3 my-3">
                <div className="col-12 d-flex justify-content-start align-items-center border-bottom py-3">
                  <input type="radio" name id />
                  <img
                    className="ps-3"
                    src="https://rukminim1.flixcart.com/www/96/96/promos/19/09/2022/d17a4806-f80c-4ab1-ae79-7f20e5cb50f9.png?q=100"
                    alt
                  />
                  <div className="ps-3">Google Pay UPI</div>
                </div>
                <div className="col-12 d-flex justify-content-start align-items-center border-bottom py-3">
                  <input type="radio" name id />
                  <div className="ps-3">UPI</div>
                </div>
                <div className="col-12 d-flex justify-content-start align-items-center border-bottom py-3">
                  <input type="radio" name id />
                  <div className="ps-3">Credit / Debit / ATM Card</div>
                </div>
                <div className="col-12 d-flex justify-content-start align-items-center border-bottom py-3">
                  <input type="radio" name id />
                  <div className="ps-3">Cash on Delivery</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 mb-3">
                  <button className="payment-btn">PAY NOW</button>
                </div>
              </div>
            </div>
          </div>
          {/* Order Summary  */}
          <div className="col-lg-5 col-12">
            <div className="order-summary mt-4 mb-5">
              <h4 className="order-title">Order Summary</h4>

              <div className="subtotal-details d-flex justify-content-between align-items-center mt-4">
                <div className="subtotal">
                  Subtotal ({cartList?.length} items)
                </div>
                <div className="subtotal-price">₹ {subtotal}</div>
              </div>

              <div className="delivery-total d-flex justify-content-between align-items-center mt-3">
                <div className="delivery-charges">Delivery Charges</div>
                <div className="delivery-price">₹ {deliveryCharges}</div>
              </div>

              <div className="total-pay d-flex justify-content-between align-items-center mt-4">
                <div className="total-title">Total Payable</div>
                <div className="total-price">₹ {totalPayable}</div>
              </div>

              {/* Cart Items */}
              {cartList?.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mt-4"
                >
                  <div className="order-details d-flex justify-content-start align-items-center">
                    <div className="order-img me-4">
                      <img
                        src={item?.product?.product_featured_pic}
                        alt={item?.product?.product_name}
                        width={80}
                        height={80}
                      />
                      <div className="product-quantity">
                        {item?.product_quantity}
                      </div>
                    </div>
                    <div className="order-title">
                      <Link to={`/productdetails/${item?.product_id}`}>
                        {item?.product?.product_name}
                      </Link>
                      <div>Size: {item?.size_name || "N/A"}</div>
                      <div>Color: {item?.color_name || "N/A"}</div>
                    </div>
                  </div>
                  <div className="order-price">
                    ₹{item?.product?.product_current_price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
