import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice/ProductSlice";
import AuthSlice from "./ProductSlice/AuthSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    auths:AuthSlice,
  },
});

export default store;
