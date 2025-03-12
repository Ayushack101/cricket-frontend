import { API } from "./utils";

export const getProducts = async (filters) => {
  try {
    let filterData = {};

    const filterType = filters[0]?.filter_type || "";
    const mcat_ids = filters[0]?.mcat_ids || [];

    if (filterType === "all") {
      filterData = { filter_type: "all" };
    } else {
      if (filterType === "mcat_ids") {
        filterData.mcat_ids = mcat_ids;
      }
      if (filters[1]?.max_price != "" && filters[1]?.min_price != "") {
        filterData.min_price = filters[1]?.min_price;
        filterData.max_price = filters[1]?.max_price;
      }
      //   if (searchTerm) {
      //     filterData.search_term = searchTerm;
      //   }
    }
    filterData = JSON.stringify(filterData);

    const { data } = await API.post(
      "https://angry.shinewebtech.in/api/get_products_filter.php",
      filterData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data?.success) {
      return { error: null, data: data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};

export const getProductById = async (pid) => {
  try {
    const { data } = await API.get(`/get_product_details_by_id.php?pid=${pid}`);

    if (data?.success) {
      return { error: null, data: data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};

export const getCategories = async () => {
  try {
    const { data } = await API.get("/get_top_category.php");

    if (data?.success) {
      return { error: null, data: data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};
export const getMidCategories = async () => {
  try {
    const { data } = await API.get("/get_mid_category.php");

    if (data?.success) {
      return { error: null, data: data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};

// Trending products API
export const getTrendingProducts = async () => {
  try {
    const { data } = await API.get("/get_trending_products.php");

    if (data?.success) {
      return { error: null, data: data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};


 