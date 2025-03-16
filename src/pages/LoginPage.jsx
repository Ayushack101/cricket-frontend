import React, { useEffect, useState } from "react";
// import LoginIMG from '../assets/img/two.jpg';
import { BsFillEyeFill } from "react-icons/bs";
import { HiEyeSlash } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginFun } from "../redux/AuthSlice/AuthSlice";
import { Link, useNavigate } from "react-router-dom";

import IMG1 from "../assets/img/champ3.webp";
// import IMG2 from '../assets/img/champ2.webp';
import IMG3 from "../assets/img/w1.jpg";
import IMG4 from "../assets/img/w2.jpg";
import IMG5 from "../assets/img/w3.jpg";
import IMG6 from "../assets/img/w4.avif";
import IMG7 from "../assets/img/w5.avif";
import IMG8 from "../assets/img/w6.avif";
import IMG2 from "../assets/img/f2.avif";
import IMG9 from "../assets/img/f1.avif";
import { addToCart } from "../redux/CartSlice/CartSlice";
// import { addToCart } from "../redux/api/CartApi";
const LoginPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { isLoginLoading, error, loginSuccess } = useSelector(
    (state) => state.auths
  );
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [IMG1, IMG3, IMG4, IMG2, IMG5, IMG6, IMG9, IMG7, IMG8];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (loginSuccess) {
      // add local storage cart data to user cart when user successfully logged in
      const cartData = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : null;
      if (cartData) {
        // multiple cart data
        cartData.forEach((cart) => {
          dispatch(addToCart(cart));
        });
      }
      localStorage.removeItem("cart");
      navigate("/");
    }
  }, [loginSuccess]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTogglePassword = () => {
    setShowPass((prev) => !prev);
  };

  const onSubmit = async (data) => {
    dispatch(loginFun(data));
  };

  return (
    <div>
      <style>{`
        .form-img {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }
        .form-img img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        .form-img img.active {
          opacity: 1;
        }
      `}</style>
      <div className="login-form">
        <div className="row gx-0">
          <div className="col-lg-7">
            <div className="form-img">
              {/* <img src={LoginIMG} height="100%" width="100%" alt="login" /> */}
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={index === currentImageIndex ? "active" : ""}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-5 login-card-container">
            <div
              className="d-flex justify-content-center align-items-center py-4"
              style={{ height: "100%" }}
            >
              <div className="login-card">
                <h5 className="mb-4 pb-1">Login</h5>

                {error && (
                  <h6 className="input-error-main text-danger">{error}</h6>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required!" })}
                      className="form-style"
                      placeholder="Email address"
                      id="logemail"
                      autoComplete="off"
                    />
                    <i className="input-icon uil uil-at" />
                    <p className="input-error">{errors?.email?.message}</p>
                  </div>
                  <div className="form-group mt-2 position-relative">
                    <input
                      type={showPass ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required!",
                      })}
                      className="form-style"
                      placeholder="Password"
                      id="logpass"
                      autoComplete="off"
                    />

                    <span
                      onClick={handleTogglePassword}
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#888",
                      }}
                    >
                      {showPass ? (
                        <HiEyeSlash size={20} />
                      ) : (
                        <BsFillEyeFill size={20} />
                      )}
                    </span>
                    <i className="input-icon uil uil-lock-alt" />
                    <p className="input-error">{errors?.password?.message}</p>
                  </div>

                  <p className="mb-3 text-center">
                    <a href="#0" className="link">
                      Forgot your password?
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="login-btn"
                    disabled={isLoginLoading}
                  >
                    {isLoginLoading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <p className="mb-0 mt-4 text-center">
                  Don’t have an account?{" "}
                  <Link to="/auth/signup" className="link">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
