import React from "react";

import bannerImage from "../assets/img/product-img/p-banner.jpg";
import img1 from "../assets/img/s-1.jpg";
import img2 from "../assets/img/s-1-1.jpg";
import img3 from "../assets/img/s-2.jpg";
import img4 from "../assets/img/s-2-2.jpg";
import img5 from "../assets/img/s-3.jpg";
import img6 from "../assets/img/s-3-3.jpg";

const Collection = () => {
  return (
    <div>
      <div class="p-banner">
        <img src={bannerImage} class="w-100" alt="" />
      </div>

      <div className="container-fluid py-5">
        {/* filters */}
        <div className="filter-h text-end px-4">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
          >
            <i className="fa-solid fa-list" />
            Filter
          </span>
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasLeft"
          aria-labelledby="offcanvasLeftLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasLeftLabel">logo</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="main-checkbox">
              <div className="side-content">
                <h4>categories</h4>
              </div>
              <div className="sub-category mt-3">
                <div className="input-btn">
                  Cricket{" "}
                  <span>
                    <i className="fa-solid fa-angle-down" />
                  </span>
                </div>
                <div className="cricket-checkboxes mt-2">
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Bats
                  </span>
                  <input type="checkbox" name />
                  <br />
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Balls
                  </span>
                  <input type="checkbox" name />
                  <br />
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Gloves
                  </span>
                  <input type="checkbox" name />
                  <br />
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Helmets
                  </span>
                  <input type="checkbox" name />
                  <br />
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Pads
                  </span>
                  <input type="checkbox" name />
                  <br />
                  <span
                    className="checkbox-label sub-checkbox"
                    style={{ fontSize: 17 }}
                  >
                    Stumps
                  </span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label" style={{ fontSize: 17 }}>
                    Football
                  </span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label" style={{ fontSize: 17 }}>
                    Basketball
                  </span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label" style={{ fontSize: 17 }}>
                    Tennis
                  </span>
                  <input type="checkbox" name />
                </div>
                <div className="price mt-4">
                  <div className="peice-btn">Price </div>
                  <div className="price-checkboxes mt-2">
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 1500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 2500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 3500
                    </span>
                    <input type="checkbox" name />
                    <br />
                  </div>
                </div>
                <div className="btn btn-dark w-100 mt-4">Apply Filter</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 my-col">
            <div className="main-checkbox">
              <div className="side-content">
                <h4>categories</h4>
              </div>
              <div className="sub-category mt-3">
                <div className="input-btn">
                  Cricket{" "}
                  <span>
                    <i className="fa-solid fa-angle-down" />
                  </span>
                </div>
                <div className="cricket-checkboxes mt-2">
                  <span className="checkbox-label sub-checkbox">Bats</span>
                  <input type="checkbox" name />
                  <br />
                  <span className="checkbox-label sub-checkbox">Balls</span>
                  <input type="checkbox" name />
                  <br />
                  <span className="checkbox-label sub-checkbox">Gloves</span>
                  <input type="checkbox" name />
                  <br />
                  <span className="checkbox-label sub-checkbox">Helmets</span>
                  <input type="checkbox" name />
                  <br />
                  <span className="checkbox-label sub-checkbox">Pads</span>
                  <input type="checkbox" name />
                  <br />
                  <span className="checkbox-label sub-checkbox">Stumps</span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label">Football</span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label">Basketball</span>
                  <input type="checkbox" name />
                </div>
                <div>
                  <span className="checkbox-label">Tennis</span>
                  <input type="checkbox" name />
                </div>
                <div className="price mt-4">
                  <div className="peice-btn">Price </div>
                  <div className="price-checkboxes mt-2">
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 1500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 2500
                    </span>
                    <input type="checkbox" name />
                    <br />
                    <span className="checkbox-label" style={{ fontSize: 17 }}>
                      Rs. 0 to Rs. 3500
                    </span>
                    <input type="checkbox" name />
                    <br />
                  </div>
                </div>
                <div className="btn btn-dark w-100 mt-4">Apply Filter</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img1} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img2} className="img-fluid" alt />
                </div>
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
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img3} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img4} className="img-fluid" alt />
                </div>
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
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img5} className="img-fluid" alt />
              </div>
              <div className="silder-txt">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <p className="mt-2">Rs. 4,099.00</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
              <div className="side-img">
                <div className="right-img">
                  <img src={img6} className="img-fluid" alt />
                </div>
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

        {/* Pagination */}
        <div className="mypagi mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Collection;
