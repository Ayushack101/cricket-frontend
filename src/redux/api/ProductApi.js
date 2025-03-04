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
