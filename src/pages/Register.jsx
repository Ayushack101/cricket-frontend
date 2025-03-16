import React, { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { HiEyeSlash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerFun } from "../redux/AuthSlice/AuthSlice";
import IMG1 from "../assets/img/champ3.webp";
import IMG3 from "../assets/img/w1.jpg";
import IMG4 from "../assets/img/w2.jpg";
import IMG5 from "../assets/img/w3.jpg";
import IMG6 from "../assets/img/w4.avif";
import IMG7 from "../assets/img/w5.avif";
import IMG8 from "../assets/img/w6.avif";
import IMG2 from "../assets/img/f2.avif";
import IMG9 from "../assets/img/f1.avif";
const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { isRegError, isRegLoading, isRegSuccess } = useSelector(
    (state) => state.auths
  );
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [IMG1, IMG2, IMG9, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (isRegSuccess) {
      navigate("/auth/signin");
    }
  }, [isRegSuccess]);
  const onSubmit = async (data) => {
    dispatch(registerFun(data));
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
                <h5 className="mb-4 pb-1">Register</h5>
                {isRegError && (
                  <h6 className="input-error-main text-danger">{isRegError}</h6>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="text"
                      {...register("username", {
                        required: "Username is required",
                      })}
                      className="form-style"
                      placeholder="Username"
                      autoComplete="off"
                    />
                    {errors.username && (
                      <p className="text-danger">{errors.username.message}</p>
                    )}
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message:
                            "Phone must be 10 digits and start with 9,8,7,6",
                        },
                      })}
                      className="form-style"
                      placeholder="Phone Number"
                      autoComplete="off"
                    />
                    {errors.phone && (
                      <p className="text-danger">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="form-style"
                      placeholder="Email address"
                      autoComplete="off"
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group mt-2 position-relative">
                    <input
                      type={showPass ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/,
                          message: "Min 6 char, 1 symbol, 1 uppercase letter",
                        },
                      })}
                      className="form-style"
                      placeholder="Password"
                      autoComplete="off"
                    />
                    <span
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#888",
                      }}
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? (
                        <HiEyeSlash size={20} />
                      ) : (
                        <BsFillEyeFill size={20} />
                      )}
                    </span>
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="form-group mt-2 position-relative">
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className="form-style"
                      placeholder="Confirm Password"
                      autoComplete="off"
                    />
                    <span
                      className="position-absolute"
                      style={{
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "#888",
                      }}
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    >
                      {showConfirmPass ? (
                        <HiEyeSlash size={20} />
                      ) : (
                        <BsFillEyeFill size={20} />
                      )}
                    </span>
                    {errors.confirmPassword && (
                      <p className="text-danger">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="login-btn w-100 mt-3"
                    disabled={isRegLoading}
                  >
                    {isRegLoading ? "Registering..." : "Register"}
                  </button>
                </form>

                <p className="mb-0 mt-4 text-center">
                  Have an account?{" "}
                  <Link to="/auth/signin" className="link">
                    Sign In
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
export default Register;
