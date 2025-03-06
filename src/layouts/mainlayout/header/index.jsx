import React,{ useEffect } from "react";
// import  from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchCategory,fetchMidCategory } from "../../../redux/ProductSlice/ProductSlice";
const Header = () => {
  const dispatch = useDispatch();
    const { topCategory } = useSelector((state) => state.products);
    const {midCategory}=useSelector((state)=>state.products);
    console.log(midCategory,"top category fucntion ",topCategory)
    useEffect(()=>{
      dispatch(fetchCategory());
          dispatch(fetchMidCategory());
    },[]);

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
        <nav className="navbar navbar-expand-lg bg-white mynav shadow-sm">
          <div className="container flex-column py-3">
            {/* <!-- Logo and Search Bar on top --> */}
            <div className="d-flex justify-content-between w-100  myflex mb-3">
              {/* <!-- Logo --> */}
              <div className="mya">
                <Link to={"/"} className="navbar-brand fw-bold" href="#">
                  <img src="logo.png" alt="DSC Fearless" height="40" />
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
                <button className="btn btn-outline-danger mybtn" type="submit">
                  🔍
                </button>
              </form>
  
              {/* <!-- Account & Cart Icons --> */}
              <div className="d-flex">
                <div className="mycart">
                  <a href="#" className="me-3 text-decoration-none text-dark">
                    <i className="fa-solid fa-circle-user"></i> Account
                  </a>
                  <a href="#" className="text-decoration-none text-dark">
                    <i className="fa-solid fa-cart-shopping"></i> Cart
                  </a>
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
                    <Link className="nav-link" to={'/'}>
                      Home<span>|</span>
                    </Link>
                  </li>
                  {topCategory.map((category, index) => ( <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {category?.tcat_name} <span>|</span>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      
                      {/* {midCategory.map((midCat,index)=>(<li> */}
                      {midCategory ? midCategory.filter((midCat) => category?.id == midCat?.tcat_id).map((midCat,index)=>(<li>
                        <Link className="dropdown-item" to={`/collection/${category?.id}/${midCat?.id}`}>
                          {midCat?.mcat_name} 
                        </Link>
                      </li>)):<><li><Link className="dropdown-item" href="#">Comming Soon</Link></li></>}
                    </ul>
                  </li>
  )) }
                 
  
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      about <span>|</span>
                    </a>
                  </li>
  
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>|</span> contact
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
