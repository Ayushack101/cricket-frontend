import * as api from "../api/ProductApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (a, thunkAPI) => {
    try {
      const { filters } = thunkAPI.getState()?.products;
      const { error, data } = await api.getProducts(filters);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  productList: [],
  productStatus: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
  filters: [{ product_category: [] }, { search_id: "" }],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters[0] = action.payload[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = productSlice.actions;

export default productSlice.reducer;
