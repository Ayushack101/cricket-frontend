import { API } from "./utils";

export const addToCartApi = async (cartData) => {
  try {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const token = user?.token ?? "";

    const { data } = await API.get(
      `/add_to_cart.php?pid=${cartData?.pid}&cus_id=${cartData?.cus_id}&quantity=${cartData?.quantity}&size_id=${cartData?.size_id}&color_id=${cartData?.color_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data?.success) {
      return { error: null, data: [] };
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occured";
    return { error: errorMessage, data: null };
  }
};

export const getCartById = async (cus_id) => {
  try {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const token = user?.token ?? "";
    const { data } = await API.get(`/get_cart_by_id.php?cus_id=${cus_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

export const getCartLocalData = async (localData) => {
  try {
    const { data } = await API.post("/get_cart_local_data.php", {
      local_data: JSON.stringify(localData), // Fix here
    });

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

export const removeFromCartApi = async (pid, cus_id) => {
  try {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const token = user?.token ?? "";
    const { data } = await API.get(
      `/remove_from_cart.php?pid=${pid}&cus_id=${cus_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
