import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import b1 from "../../assets/img/b1.jpg";
import cH from "../../assets/img/c-h.png";
import cG from "../../assets/img/c-g.png";

const SliderHome = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <Slider {...settings} className="slider-home">
        <div>
          <img src={b1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div>
          <img src={cH} className="d-block w-100" alt="Slide 2" />
        </div>
        <div>
          <img src={cG} className="d-block w-100" alt="Slide 3" />
        </div>
      </Slider>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/img/b1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/img/c-h.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/img/c-g.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default SliderHome;
