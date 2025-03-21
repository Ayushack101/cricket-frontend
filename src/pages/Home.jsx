import React, { useEffect } from "react";
import SliderHome from "../components/slider/SliderHome";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import one from "../assets/img/one.jpg";
import two from "../assets/img/two.jpg";
import three from "../assets/img/three.jpg";
import four from "../assets/img/four.jpg";

import catimg1 from "../assets/img/bat.jpg";
import catimg2 from "../assets/img/ball.jpg";
import catimg3 from "../assets/img/glaps.jpg";
import catimg4 from "../assets/img/Kit.jpg";

import video from "../assets/img/im-gallery.jpg";

import explore_img1 from "../assets/img/shoes.jpg";
import explore_vid1 from "../assets/img/video.mp4";

import imgbg from "../assets/img/join.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchMidCategory,
  fetchTrendingProducts,
} from "../redux/ProductSlice/ProductSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { trendingProducts, trendingStatus, trendingError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchMidCategory());
    dispatch(fetchTrendingProducts());
  }, []);

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="slick-prev" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button className="slick-next" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    
    <div>
      {/* Slider */}
      <SliderHome />

      {/* Main Categories */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-sec">
                <img
                  src={one}
                  className="img-fluid"
                  alt="Cricket Batting Combo"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="txt-img">
                <span>Upto 40% OFF</span>
                <h2>Cricket Batting Combo</h2>
                <div className="img-btn mt-4">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="txt-img">
                <span>Upto 40% OFF</span>
                <h2>Cricket Bats</h2>
                <div className="img-btn mt-4">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-sec">
                <img src={two} className="img-fluid" alt="Cricket Bats" />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="img-sec">
                <img
                  src={three}
                  className="img-fluid"
                  alt="Cricket Batting Pads"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="txt-img">
                <span>Upto 40% OFF</span>
                <h2>Cricket Batting Pads</h2>
                <div className="img-btn mt-4">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-lg-6">
              <div className="txt-img">
                <span>Upto 40% OFF</span>
                <h2>Cricket Batting Gloves</h2>
                <div className="img-btn mt-4">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-sec">
                <img
                  src={four}
                  className="img-fluid"
                  alt="Cricket Batting Gloves"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Selling Products */}
      <div className="container-fluid py-4">
        <div className="container">
          <div className="h-slider pb-3">
            <h1>Featured</h1>
          </div>

          <div className="row g-3">
            {trendingProducts?.length == 0 ? (
              <h4>No Products Found</h4>
            ) : (
              <Slider {...settings} className="slider-trending">
                {trendingProducts?.map((products, index) => (
                  <div key={index}>
                    <Link to={`/productdetails/${products?.id}`}>
                      <div className="side-img">
                        <div className="right-img" style={{ height: "250px" }}>
                          <img
                            src={products?.product_featured_pic}
                            style={{
                              objectFit: "cover",
                              height: "100%",
                              width: "100%",
                            }}
                            className="img-fluid"
                            alt="Image 1"
                          />
                        </div>
                        <div className="cart-info">
                          <p style={{ marginBottom: 2 }}>
                            {products?.product_name.length > 30
                              ? products?.product_name.substring(0, 30) + "..."
                              : products?.product_name}
                          </p>
                          <span className="my-span">
                            ₹ {products?.product_current_price}
                          </span>
                          <span>
                            <del>₹ {products?.product_old_price}</del>
                          </span>
                          {products?.product_old_price >
                          products?.product_current_price ? (
                            <span className="price-off">
                              {Math.round(
                                ((products?.product_old_price -
                                  products?.product_current_price) /
                                  products?.product_old_price) *
                                  100
                              )}
                              % off
                            </span>
                          ) : (
                            ""
                          )}
                          <p style={{ marginBottom: 2, fontSize: "13px" }}>
                            Free Delivery
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>

      {/* Big Image */}
      <div className="img-bg">
        <img src={video} className="img-fluid mt-5" alt="" />
        <a id="play-video" className="video-play-button" href="#">
          <span></span>
        </a>

        <div id="video-overlay" className="video-overlay">
          <a className="video-overlay-close">&times;</a>
        </div>
      </div>

      {/* More Categories */}
      <div className="container-fluid mt-5 py-5">
        <div className="c-h-one text-center">
          <h1>
            <span style={{ color: "#ff5500" }}>cat</span>egories
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="c-one">
              <img src={catimg1} className="img-fluid" alt="" />
              <div className="txt-c">
                <span>Bats</span>
                <a href="#">
                  Shop Now <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="c-one">
              <img src={catimg2} className="img-fluid" alt="" />
              <div className="txt-c">
                <span>Bats</span>
                <a href="#">
                  Shop Now <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="c-one">
                <img src={catimg3} className="img-fluid" alt="" />
                <div className="txt-c">
                  <span>Bats</span>
                  <a href="#">
                    Shop Now <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="c-one">
              <img src={catimg4} className="img-fluid" alt="" />
              <div className="txt-c">
                <span>Bats</span>
                <a href="#">
                  Shop Now <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="c-one myone">
              <img src={explore_img1} className="img-fluid" alt="" />
              <div className="txt-c mysohes-txt">
                <span>RUNNING SHOES</span>
                <a href="#">
                  Explore<i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="c-one myone">
              <video
                autoplay
                loop
                muted
                playsinline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source type="video/mp4" src={explore_vid1} />
              </video>
              <div className="txt-c mysohes-txt">
                <span> SPORT WEAR</span>
                <a href="#">
                  Shop Now <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container-fluid mt-5 py-5">
        <div className="c-h-one text-center">
          <h1>FAQ</h1>
        </div>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Return policy
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>100% return within 3 days of delivery</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Customer care
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>help@slugger.co.in</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Cash on delivery (COD)
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Minimum limit for COD order is Rs. 499 and maximum limit is
                    Rs. 3399.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* img */}
      <div className="img-bg mt-5">
        <img src={imgbg} class="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default Home;
