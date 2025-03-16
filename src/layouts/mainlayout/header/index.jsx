import React, { useEffect } from "react";
// import  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IMG3 from "../../../assets/img/websitelogo.webp";
import {
  fetchCategory,
  fetchMidCategory,
} from "../../../redux/ProductSlice/ProductSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { topCategory } = useSelector((state) => state.products);
  const { midCategory } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auths);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchMidCategory());
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <p>
            COD upto Rs. 3349 | Free delivery | <span>100% returns</span>
          </p>
          <div className="right">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white mynav border-bottom">
        <div class="container flex-column pt-3">
          {/* <!-- Logo and Search Bar on top --> */}
          <div className="d-flex justify-content-between align-items-center w-100 myflex mb-3">
            {/* <!-- Logo --> */}
            <div className="mya">
              <Link to={"/"} className="fw-bold" href="#">
                <img src={IMG3} alt="DSC Fearless" />
              </Link>

              <div className="my-menu">
                <i
                  className="fa-solid fa-bars"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                ></i>
              </div>
            </div>

            {/* Offcanvas */}
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">logo</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <nav className="myside">
                  <ul>
                    <li>
                      <Link to={"/"} title="Nach Hause">
                        Home
                      </Link>
                    </li>
                    <li className="sub">
                      <input type="checkbox" />
                      <a href="#">Cricket</a>

                      <ul className="submenu">
                        <li className="sub">
                          <a href="#">Bats</a>
                          <a href="#">Batting Gloves</a>
                          <a href="#">Batting Leg Guards</a>
                          <a href="#">Thigh Guard</a>
                          <a href="#">Kit bags</a>
                          <a href="#">Batting combos</a>
                          <a href="#">Wicket keeping</a>
                          <a href="#">Batting Leg Guards</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Football</a>
                    </li>
                    <li>
                      <a href="#">Basketball</a>
                    </li>
                    <li>
                      <a href="#">Tennis</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* <!-- Search Bar --> */}
            <form className="d-flex  myserch" role="search">
              <input
                className="form-control me-2 mycontrol"
                type="search"
                placeholder="Product Name"
                aria-label="Search"
              />
              <button className="mybtn" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* <!-- Account & Cart Icons --> */}
            <div className="d-flex">
              <div className="mycart d-flex justify-content-center align-items-center">
                {user && (
                  <Link
                    to={"/account/dashboard"}
                    className="me-5 text-decoration-none text-center"
                  >
                    <i className="fa-solid fa-circle-user"></i>{" "}
                    <div>Account</div>
                  </Link>
                )}
                {!user && (
                  <Link
                    to={"/auth/signin"}
                    className="me-5 text-decoration-none text-center"
                  >
                    <i className="fa-solid fa-circle-user"></i>{" "}
                    <div>Account</div>
                  </Link>
                )}
                <Link to={"/cart"} className="text-decoration-none text-center">
                  <i className="fa-solid fa-cart-shopping"></i> <div>Cart</div>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Navbar Links below the Search Bar --> */}
          <div className="w-100">
            <div
              className="collapse navbar-collapse text-center"
              id="navbarNav"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
                {topCategory.map((category, index) => (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {category?.tcat_name}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {midCategory ? (
                        midCategory
                          .filter((midCat) => category?.id == midCat?.tcat_id)
                          .map((midCat, index) => (
                            <li>
                              <Link
                                className="dropdown-item"
                                to={`/collection/mcat_ids/${category?.id}/${midCat?.id}`}
                              >
                                {midCat?.mcat_name}
                              </Link>
                            </li>
                          ))
                      ) : (
                        <>
                          <li>
                            <Link className="dropdown-item" href="#">
                              Comming Soon
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>
                ))}

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    about
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
