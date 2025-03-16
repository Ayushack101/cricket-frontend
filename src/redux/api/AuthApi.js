import { API } from "./utils";
//login api
export const loginApi = async (info) => {
  try {
    const infoData = JSON.stringify(info);
    const { data } = await API.post("/login.php", infoData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data?.success) {
      return {
        error: null,
        data: { token: data?.token, user_id: data?.user_id },
      };
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occured";
    return { error: errorMessage, data: null };
  }
};

// register APi
export const RegisterApi = async (info) => {
  try {
    // console.log("function call api : ",info)
    const infoData = JSON.stringify(info);
    const { data } = await API.post("/user_register.php", infoData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (data?.success) {
      return { error: null, data: data };
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occured";
    console.log(error?.response?.data);
    return { error: errorMessage, data: null };
  }
};

//get user info
export const userDetails = async (id) => {
  try {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const token = user?.token ?? "";
    const { data } = await API.get(`/user_profile.php?user_id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (data?.success) {
      return {
        error: null,
        data: { data: data?.data[0], extra: data?.extra[0] },
      };
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occured";
    return { error: errorMessage, data: null };
  }
};

// Save user delivery address
export const userDeliveryAddressApi = async (userAddress) => {
  try {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    const token = user?.token ?? "";
    const userAddressData = JSON.stringify(userAddress);
    const { data } = await API.post(
      `/user_extra_details.php`,
      userAddressData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data?.success) {
      return {
        error: null,
        data: [],
      };
    }
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || "An unexpected error occured";
    return { error: errorMessage, data: null };
  }
};
