import React from "react";
import LoginIMG from '../assets/img/two.jpg'

const LoginPage = () => {
  return (
<div>
  <div className="login-form">
    <div className="row gx-0">
      <div className="col-lg-6">
        <div className="form-img">
          <img src={LoginIMG} height="100%" width="100%" alt="" />
        </div>
      </div>
      <div className="col-lg-6 login-card-container">
        <div
          className="d-flex justify-content-center align-items-center py-4"
          style={{ height: "100%" }}
        >
          <div className="login-card">
            <h5 className="mb-4 pb-1">Login</h5>
            {/* main error */}
            <h6 className="input-error-main">Auyus</h6>
            <div className="form-group">
              <input
                type="email"
                name="logemail"
                className="form-style"
                placeholder="Email address"
                id="logemail"
                autoComplete="off"
              />
              <i className="input-icon uil uil-at" />
              <p className="input-error">Auyus</p>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                name="logpass"
                className="form-style"
                placeholder="Password"
                id="logpass"
                autoComplete="off"
              />
              <i className="input-icon uil uil-lock-alt" />
            </div>
            {/* Forgot password link moved above the login button */}
            <p className="mb-3 text-center">
              <a href="#0" className="link">
                Forgot your password?
              </a>
            </p>
            <a href="#" className="login-btn">
              Login
            </a>
            {/* Signup link */}
            <p className="mb-0 mt-4 text-center">
              Don’t have an account?{" "}
              <a href="#0" className="link">
                Signup
              </a>
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
