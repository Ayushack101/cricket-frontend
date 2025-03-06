import { API } from "./utils";

export const getProducts = async (filters) => {
  try {
    const filterData = JSON.stringify(filters);
    const { data } = await API.post("/getBusiness.php", filterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    console.log("parameter : ",filters);
    const { data } = await API.get("/get_top_category.php");
    console.log("data : ",data,data?.success,data?.data);
    
    if (data?.success) {
      return { error: null, data:data?.data };
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
    console.log("data of Mid cat : ",data,data?.success,data?.data);
    
    if (data?.success) {
      return { error: null, data:data?.data };
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
      return { error: null, data:data?.data };
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  }
};

