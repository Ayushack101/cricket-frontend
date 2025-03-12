import { API } from "./utils";

export const getProducts = async (filters) => {
  try {
    console.log("function call : ");
    let filterData = {};

    const filterType = filters[0]?.filter_type || "";
    const mcat_ids = filters[0]?.mcat_ids || [];
    const searchTerm = filters[2]?.search_term || "";

    if (filterType === "all") {
      filterData = { filter_type: "all" };
    } else {
      if (filterType === "mcat_ids") {
        filterData.mcat_ids = mcat_ids;
      }
      if (filters[1]?.max_price != "" && filters[1]?.min_price != "") {
        filterData.min_price = filters[1]?.max_price || 0;
        filterData.max_price = filters[1]?.min_price || 0;
      }
      if (searchTerm) {
        filterData.search_term = searchTerm;
      }
    }

    filterData = JSON.stringify(filterData);
    console.log(filterData, "ertyuio");
    filterData = {
      mcat_ids: [9],
      min_price: 0,
      max_price: 999,
    };

    const { data } = await API.post(
      "https://angry.shinewebtech.in/api/get_products_filter.php",
      filterData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data?.status) {
      return { error: null, data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};
export const getCategories = async (filters) => {
  try {
    console.log("parameter : ", filters);
    const { data } = await API.get("/get_top_category.php");
    console.log("data : ", data, data?.success, data?.data);

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
export const getMidCategories = async (filters) => {
  try {
    // console.log("parameter : ",filters);https://angry.shinewebtech.in/api/get_mid_category.php?top_category_id=1
    const { data } = await API.get("/get_mid_category.php");
    console.log("data of Mid cat : ", data, data?.success, data?.data);

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


 