import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice/ProductSlice";
import AuthSlice from "./AuthSlice/AuthSlice";
import CartSlice from "./CartSlice/CartSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
    auths: AuthSlice,
    cart: CartSlice,
  },
});

export default store;
