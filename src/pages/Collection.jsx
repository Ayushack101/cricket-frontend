import React, { useEffect, useState } from "react";

import bannerImage from "../assets/img/product-img/p-banner.jpg";
import img1 from "../assets/img/s-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchMidCategory,
  fetchProducts,
  setFilters,
} from "../redux/ProductSlice/ProductSlice";
import { useParams } from "react-router-dom";

const Collection = () => {
  const [filter, setFilter] = useState([]);
  const { mcat_id } = useParams();
  const dispatch = useDispatch();
  const { topCategory, midCategory, filters } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    setFilter([
      { filter_type: "mcat_ids", mcat_ids: [9] },
      { max_price: 0, min_price: 999 },
    ]);
  }, []);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchMidCategory());

    dispatch(
      setFilters([
        { filter_type: "mcat_ids", mcat_ids: [9] },
        { max_price: 0, min_price: 999 },
      ])
    );
    dispatch(fetchProducts());
  }, []);

  console.log(filters);

  return (
    <>
      {/* Banner */}
      <div class="p-banner">
        <img src={bannerImage} alt="" />
      </div>
      <div className="container-fluid py-5">
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
        <div className="clear-btn">
          <span className="p-product">8 products</span>
          <div className="btns mt-3">
            <span className="btn-one">
              bats <i className="fa-brands fa-searchengin" />
            </span>
            <span className="btn-second">
              clear <i className="fa-solid fa-xmark" />
            </span>
          </div>
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
          {/* Filters */}
          <div className="offcanvas-body">
            <div className="main-checkbox">
              <div className="side-content">
                <h6>Sort by</h6>
                <select className="select mt-3" name id>
                  <option value>--select--</option>
                  <option value>bat</option>
                  <option value>ball</option>
                  <option value>kit</option>
                  <option value>english bat</option>
                </select>
                <h4 className="mt-4">
                  <span>
                    <i className="fa-solid fa-list" />
                  </span>
                  Filter by
                </h4>
              </div>
              <hr className="mt-3" />
              {/* Second Section */}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 my-col">
            <div
              className="container myleft-container bg-light py-4"
              style={{ borderRadius: 10 }}
            >
              <div className="main-checkbox">
                <div className="side-content">
                  <h6>Sort by</h6>
                  <select className="select mt-3" name id>
                    <option value>--select--</option>
                    <option value>bat</option>
                    <option value>ball</option>
                    <option value>kit</option>
                    <option value>english bat</option>
                  </select>
                  <h4 className="mt-4">
                    <span>
                      <i className="fa-solid fa-list" />
                    </span>
                    Filter by
                  </h4>
                </div>
                <hr className="mt-3" />
                <div className="sub-category mt-3">
                  <div className="category-btn" data-target="cricket">
                    Cricket{" "}
                    <span className="right-icon">
                      <i className="fa-solid fa-angle-down" />
                    </span>
                  </div>
                  <div className="checkboxes" id="cricket">
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Bats</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Balls</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Gloves</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Gloves</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Gloves</span>
                  </div>
                  <hr className="mt-4" />
                  <div className="category-btn" data-target="football">
                    Football{" "}
                    <span className="right-icon">
                      <i className="fa-solid fa-angle-down" />
                    </span>
                  </div>
                  <div className="checkboxes" id="football">
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">
                      Football Shoes
                    </span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Jersey</span>
                    <br />
                  </div>
                  <hr />
                  <div className="category-btn" data-target="basketball">
                    Basketball{" "}
                    <span className="right-icon">
                      <i className="fa-solid fa-angle-down" />
                    </span>
                  </div>
                  <div className="checkboxes" id="basketball">
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">
                      Basketball
                    </span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Hoop</span>
                    <br />
                  </div>
                  <hr className="mt-4" />
                  <div className="category-btn" data-target="tennis">
                    Tennis{" "}
                    <span className="right-icon">
                      <i className="fa-solid fa-angle-down" />
                    </span>
                  </div>
                  <div className="checkboxes" id="tennis">
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Rackets</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Balls</span>
                    <br />
                  </div>
                  <hr className="mt-4" />
                  <div className="category-btn" data-target="price">
                    Price{" "}
                    <span className="right-icon">
                      <i className="fa-solid fa-angle-down" />
                    </span>
                  </div>
                  <div className="checkboxes" id="price">
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Rackets</span>
                    <br />
                    <input type="checkbox" name />
                    <span className="checkbox-label sub-checkbox">Balls</span>
                    <br />
                  </div>
                  {/*<div class="btn btn-dark w-100 mt-4 a-btn">Apply Filter</div>*/}
                </div>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="side-img">
              <div className="right-img">
                <img src={img1} className="img-fluid" alt />
              </div>
              <div className="silder-txt mt-3">
                <a href="#">
                  SLUGGER Corporate combo of White Batting Leg guards/Pads and
                  White Gloves (2 products)
                </a>
                <br />
                <span className="my-span mt-3">Rs. 4,099.00</span>{" "}
                <span>
                  <del>Rs. 4,099.00</del>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mypagi mt-5">
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
        </div> */}
      </div>
    </>
  );
};

export default Collection;
