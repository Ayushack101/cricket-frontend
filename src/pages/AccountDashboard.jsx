import React, { useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsFun } from "../redux/AuthSlice/AuthSlice";

const AccountDashboard = () => {
  const { user, userInfo, userExtraInfo } = useSelector((state) => state.auths);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetailsFun(user?.user_id));
  }, [dispatch]);

  return (
    <>
      <section className="account-dashboard px-3 px-lg-5">
        <div className="row gx-5">
          <DashboardSidebar activeLink={"/account/dashboard"} />
          <div className="col-12 col-lg-9 mt-4 mt-lg-0">
            <div className="account-info">
              <h4 className="pb-2 main-heading">Account Information</h4>
              <hr className="main-border" />
              <div className="row ">
                <div className="col-12 col-lg-6 mt-5 mt-lg-5 px-4 account-info-box">
                  <h5 className="box-heading">Contact Information</h5>
                  <hr />
                  <p className="mb-1">{userInfo?.username}</p>
                  <p className="mb-1">{userInfo?.email}</p>
                  <p className="mb-2">{userInfo?.phone}</p>
                  <button className="box-button">Edit</button>
                </div>
                <div className="col-12 col-lg-6 mt-4 mt-lg-5 px-4 account-info-box">
                  <h5 className="box-heading">Account Verification</h5>
                  <hr />
                  {userInfo?.status === "active" && (
                    <p className="mb-2 text-success">
                      Your Account is Verified <i class="fa-solid fa-check"></i>
                    </p>
                  )}
                  {userInfo?.status === "pending" && (
                    <p className="mb-2 text-warning">
                      Your Account is not Verified
                      <i class="fa-solid fa-xmark"></i>
                    </p>
                  )}

                  <button className="box-button">Verify</button>
                </div>
              </div>
            </div>
            <div className="account-info mt-5 mt-lg-5">
              <h4 className="pb-2 main-heading">Address</h4>
              <hr className="main-border" />
              <div className="row ">
                <div className="col-12 col-lg-6 mt-4 mt-lg-5 px-4 account-info-box">
                  <h5 className="box-heading">Delivery Address</h5>
                  <hr />

                  {userExtraInfo?.user_d_address && (
                    <>
                      <p className="mb-1">{userExtraInfo?.user_d_name}</p>
                      <p className="mb-1">{userExtraInfo?.user_d_phone}</p>
                      <p className="mb-2">
                        {userExtraInfo?.user_d_address},{" "}
                        {userExtraInfo?.user_d_city},{" "}
                        {userExtraInfo?.user_d_state},{" "}
                        {userExtraInfo?.user_d_zip}
                      </p>
                    </>
                  )}
                  {!userExtraInfo?.user_d_address && (
                    <p className="mb-1">You have not set a delivery address.</p>
                  )}

                  <Link to={"/account/address"} className="box-button">
                    Edit Address
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountDashboard;
