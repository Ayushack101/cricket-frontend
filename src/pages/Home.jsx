import React from "react";
import Card from "../components/card/Card";
import SliderHome from "../components/slider/SliderHome";

import one from "../assets/img/one.jpg";
import two from "../assets/img/two.jpg";
import three from "../assets/img/three.jpg";
import four from "../assets/img/four.jpg";

import img1 from "../assets/img/s-1.jpg";
import img2 from "../assets/img/s-1-1.jpg";
import img3 from "../assets/img/s-2.jpg";
import img4 from "../assets/img/s-2-2.jpg";
import img5 from "../assets/img/s-3.jpg";
import img6 from "../assets/img/s-3-3.jpg";

import catimg1 from "../assets/img/bat.jpg";
import catimg2 from "../assets/img/ball.jpg";
import catimg3 from "../assets/img/glaps.jpg";
import catimg4 from "../assets/img/Kit.jpg";

import video from "../assets/img/im-gallery.jpg";

import explore_img1 from "../assets/img/shoes.jpg";
import explore_vid1 from "../assets/img/video.mp4";

import imgbg from "../assets/img/join.jpg";

const Home = () => {
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
          <div className="h-slider">
            <h1>Hot selling</h1>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-3">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img1} className="image-one" alt="Image 1" />
                  <img src={img2} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-3">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img3} className="image-one" alt="Image 1" />
                  <img src={img4} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-3">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img1} className="image-one" alt="Image 1" />
                  <img src={img2} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img5} className="image-one" alt="Image 1" />
                  <img src={img6} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img3} className="image-one" alt="Image 1" />
                  <img src={img4} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5">
              <div className="my-badge">
                <div className="image-slider">
                  <img src={img1} className="image-one" alt="Image 1" />
                  <img src={img2} className="image-two" alt="Image 2" />
                </div>
                <span className="badge rounded-pill bg-dark">sale</span>

                <div className="silder-txt">
                  <a href="#">
                    SLUGGER Corporate combo of White Batting Leg guards/Pads and
                    White Gloves (2 products)
                  </a>
                  <p className="mt-2">Rs. 4,099.00</p>
                </div>
              </div>
            </div>
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
