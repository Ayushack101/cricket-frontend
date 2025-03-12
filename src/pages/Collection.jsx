import React, { useEffect, useState } from "react";
import bannerImage from "../assets/img/product-img/p-banner.jpg";
import Card from "../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilters } from "../redux/ProductSlice/ProductSlice";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Collection = () => {
  const { mcat_id } = useParams();
  const { filter_type } = useParams();
  const [startingFilter, setStartingFilter] = useState(false);
  const [filter, setFilter] = useState([
    { filter_type: "", mcat_ids: [] },
    { min_price: "", max_price: "" },
  ]);

  // Use an object to track which top category is expanded.
  const [openCategories, setOpenCategories] = useState({});

  const dispatch = useDispatch();
  const { topCategory, midCategory, productList, productStatus, productError } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (filter_type === "mcat_ids") {
      setFilter((prev) => ({
        ...prev,
        0: {
          mcat_ids: mcat_id ? [parseInt(mcat_id)] : [],
          filter_type: "mcat_ids",
        },
      }));
      setStartingFilter(true);
    }
  }, [mcat_id]);

  // Fetch products on initial load
  useEffect(() => {
    if (startingFilter) {
      dispatch(setFilters(filter));
      dispatch(fetchProducts());
    }
  }, [filter, setFilters]);

  // Open the mid-category if the URL has a mcat_id
  useEffect(() => {
    if (mcat_id) {
      midCategory?.forEach((midCat) => {
        if (midCat?.id === parseInt(mcat_id)) {
          setOpenCategories((prev) => ({
            ...prev,
            [midCat?.tcat_id]: true,
          }));
        }
      });
    }
  }, [midCategory, mcat_id]);

  // Toggle open/closed state for a category or price
  const toggleCategory = (catId) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  console.log(filter);
  console.log(openCategories);

  // Function to add more mcat_id when user clicks a mid-category checkbox
  const handleCategorySelect = (selectedMcatId, parentTcatId) => {
    setFilter((prev) => ({
      ...prev,
      0: {
        ...prev[0],
        mcat_ids: prev[0].mcat_ids.includes(selectedMcatId)
          ? prev[0].mcat_ids.filter((id) => id !== selectedMcatId) // Remove if exists
          : [...prev[0].mcat_ids, selectedMcatId], // Add if not exists
      },
    }));
  };

  // Function to handle price filter selection
  const handlePriceFilter = (priceRange) => {
    setFilter((prev) => ({
      ...prev,
      1:
        prev[1].min_price === priceRange.split("-")[0] &&
        prev[1].max_price === priceRange.split("-")[1]
          ? { min_price: "", max_price: "" } // Deselect if already selected
          : {
              min_price: priceRange.split("-")[0],
              max_price: priceRange.split("-")[1],
            }, // Select new price
    }));
  };

  return (
    <>
      {/* Banner */}
      <div className="p-banner">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div className="container-fluid py-4">
        <div className="row mt-4">
          {/* Sidebar */}
          <div className="col-12 col-lg-3">
            <div className="bg-light p-4" style={{ borderRadius: 10 }}>
              <div className="main-checkbox">
                <div className="side-content">
                  <h6>Sort by</h6>
                  <select className="select mt-3">
                    <option value="">select</option>
                    <option value="bat">Bat</option>
                    <option value="ball">Ball</option>
                    <option value="kit">Kit</option>
                    <option value="english bat">English Bat</option>
                  </select>
                  <h4 className="mt-4">
                    <span>
                      <i className="fa-solid fa-list" />
                    </span>
                    Filter by
                  </h4>
                </div>

                {/* Categories */}
                <div className="sub-category mt-4">
                  {topCategory?.map((category, index) => (
                    <div key={index}>
                      <hr className="mt-3" />
                      <div
                        className="category-btn mb-2"
                        onClick={() => toggleCategory(category.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {category?.tcat_name}
                        <span className="right-icon">
                          <i
                            className={`fa-solid fa-angle-${
                              openCategories[category.id] ? "up" : "down"
                            }`}
                          />
                        </span>
                      </div>
                      <div
                        className={`checkboxes mb-2 ${
                          openCategories[category.id] ? "show" : ""
                        }`}
                      >
                        {midCategory?.length > 0 ? (
                          midCategory
                            .filter(
                              (midCat) => category?.id === midCat?.tcat_id
                            )
                            .map((midCat, idx) => (
                              <div key={idx} className="mt-2">
                                <input
                                  type="checkbox"
                                  name={midCat?.mcat_name}
                                  checked={filter[0]?.mcat_ids?.includes(
                                    midCat.id
                                  )}
                                  onChange={() =>
                                    handleCategorySelect(midCat.id, category.id)
                                  } // Pass the parent category ID
                                />

                                <span className="checkbox-label sub-checkbox">
                                  {midCat?.mcat_name}
                                </span>
                                <br />
                              </div>
                            ))
                        ) : (
                          <div>
                            <input type="checkbox" name />
                            <span className="checkbox-label sub-checkbox">
                              Coming Soon
                            </span>
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <hr className="mt-4" />
                  <div
                    className="category-btn"
                    onClick={() => toggleCategory("price")}
                    style={{ cursor: "pointer" }}
                  >
                    Price
                    <span className="right-icon">
                      <i
                        className={`fa-solid fa-angle-${
                          openCategories["price"] ? "up" : "down"
                        }`}
                      />
                    </span>
                  </div>
                  <div
                    className={`checkboxes mt-2 ${
                      openCategories["price"] ? "show" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mt-2"
                      name="price"
                      checked={
                        filter[1].min_price === "0" &&
                        filter[1].max_price === "500"
                      }
                      onChange={() => handlePriceFilter("0-500")}
                    />

                    <span className="checkbox-label sub-checkbox">0-500</span>
                    <br />
                    <input
                      type="checkbox"
                      className="mt-2"
                      name="balls"
                      checked={
                        filter[1].min_price === "500" &&
                        filter[1].max_price === "1000"
                      }
                      onChange={() => handlePriceFilter("500-1000")}
                    />
                    <span className="checkbox-label sub-checkbox">
                      500-1000
                    </span>
                    <br />
                    <input
                      type="checkbox"
                      className="mt-2"
                      name="balls"
                      checked={
                        filter[1].min_price === "1000" &&
                        filter[1].max_price === "2500"
                      }
                      onChange={() => handlePriceFilter("1000-2500")}
                    />
                    <span className="checkbox-label sub-checkbox">
                      1000-2500
                    </span>
                    <br />
                    <input
                      type="checkbox"
                      className="mt-2"
                      name="balls"
                      checked={
                        filter[1].min_price === "2500" &&
                        filter[1].max_price === "10000"
                      }
                      onChange={() => handlePriceFilter("2500-10000")}
                    />
                    <span className="checkbox-label sub-checkbox">
                      2500-10000
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Cards */}
          <div className="col-12 col-lg-9 mt-4 mt-lg-0">
            {/* Mid categories */}
            {filter?.[0]?.mcat_ids?.map((mcatId) => (
              <div
                key={mcatId}
                style={{
                  display: "inline-block",
                  padding: "0 14px",
                  height: "35px",
                  fontSize: "16px",
                  lineHeight: "35px",
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #dadada",
                }}
                className="chip mb-3 me-2"
              >
                <span>
                  {midCategory.map((midCat) =>
                    midCat?.id === mcatId ? midCat?.mcat_name : ""
                  )}
                </span>
              </div>
            ))}
            {/* Price */}
            {filter?.[1]?.min_price && filter?.[1]?.max_price && (
              <div
                style={{
                  display: "inline-block",
                  padding: "0 14px",
                  height: "35px",
                  fontSize: "16px",
                  lineHeight: "35px",
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #dadada",
                }}
                className="chip mb-3 me-2"
              >
                <span>
                  Price: {filter?.[1]?.min_price} - {filter?.[1]?.max_price}
                </span>
              </div>
            )}

            {/* All */}
            {filter?.[0]?.filter_type === "all" && (
              <div
                style={{
                  display: "inline-block",
                  padding: "0 14px",
                  height: "35px",
                  fontSize: "16px",
                  lineHeight: "35px",
                  borderRadius: "25px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #dadada",
                }}
                className="chip mb-3 me-2"
              >
                <span>All Products</span>
              </div>
            )}

            {/* Products */}
            <div className="row gx-3">
              {productStatus === "loading" && <Loader />}
              {productStatus === "succeeded" &&
                (productList?.length === 0 ? (
                  <h4>No Products Found</h4>
                ) : (
                  productList?.map((products, index) => (
                    <Card
                      key={index}
                      pid={products?.id}
                      img1={products?.product_featured_pic}
                      product_name={products?.product_name}
                      product_current_price={products?.product_current_price}
                      product_old_price={products?.product_old_price}
                    />
                  ))
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
