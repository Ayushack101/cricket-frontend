import React, { useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeUserDeliveryAddressSuccess,
  userDeliveryAddress,
  userDetailsFun,
} from "../redux/AuthSlice/AuthSlice";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";

const AccountAddress = () => {
  const {
    user,
    userExtraInfo,
    userDelivertAddressLoading,
    userDeliveryAddressSuccess,
  } = useSelector((state) => state.auths);

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

  useEffect(() => {
    dispatch(userDetailsFun(user?.user_id));
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
      <section className="account-address px-3 px-lg-5">
        <div className="row gx-5">
          <DashboardSidebar activeLink={"/account/address"} />
          <div className="col-12 col-lg-9 mt-4 mt-lg-0">
            <div className="address-info">
              <h4 className="pb-2 main-heading">Add Address</h4>
              <hr className="main-border" />
              {/* Edit Address */}
              {userExtraInfo?.user_d_address && (
                <div className="delivery-address mt-4">
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gx-3 my-3">
                      {/* Full Name */}
                      <div className="form-inputs col-lg-6 col-12">
                        <label className="mb-2" htmlFor="">
                          Full Name
                        </label>
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
                        <label className="mb-2" htmlFor="">
                          Phone
                        </label>
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
                        <label className="mb-2" htmlFor="">
                          Address
                        </label>
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
                        <label className="mb-2" htmlFor="">
                          City
                        </label>
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
                        <label className="mb-2" htmlFor="">
                          State
                        </label>
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
                        <label className="mb-2" htmlFor="">
                          Zip/Postal Code
                        </label>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountAddress;
