import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeEmailError,
  userDetailsFun,
  verifyEmailOtp,
} from "../redux/AuthSlice/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
const EmailVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const { user, userInfo, emailLoading, emailSuccess, emailError } =
    useSelector((state) => state.auths);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetailsFun(user?.user_id));
  }, [dispatch]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    console.log(otp);
    dispatch(verifyEmailOtp(otp));
  };

  useEffect(() => {
    if (emailSuccess) {
      toast.success("Email verified successfully");
      window.location.href = "/";
    }
    if (emailError) {
      toast.warning(emailError);
      dispatch(removeEmailError());
    }
  }, [emailSuccess, emailError, dispatch]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
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
      <div
        className="bg-white p-4 rounded shadow-sm text-center"
        style={{ width: "400px" }}
      >
        <h3>Verify Your Email</h3>
        <p>A verification code has been sent to your email</p>
        <strong>{userInfo?.email}</strong>
        <p>Please enter the code below to verify your email.</p>

        <div className="d-flex justify-content-center mt-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="form-control text-center mx-1"
              style={{ width: "50px", height: "50px", fontSize: "24px" }}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <button className="btn btn-primary mt-4" onClick={handleSubmit}>
          {emailLoading == "idle" ? "Verify" : ""}
          {emailLoading == "loading" ? "Verifying..." : ""}
          {emailLoading == "succeded" ? "Verified" : ""}
        </button>

        <p className="mt-3">
          <a href="#">Resend OTP</a>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
