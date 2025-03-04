import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASEURL;

// const authInterceptor = (req) => {
//   const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
//   if (accessToken) {
//     req.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return req;
// };

export const API = axios.create({
  baseURL: BASE_URL,
});

// API.interceptors.request.use(authInterceptor);
