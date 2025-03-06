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
export const fetchCategory = createAsyncThunk(
  "products/fetchCategory",
  async (a, thunkAPI) => {
    try {
      const { filters } = thunkAPI.getState()?.products;
      const { error, data } = await api.getCategories(filters);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchMidCategory = createAsyncThunk(
  "products/fetchMidCategory",
  async (a, thunkAPI) => {
    try {
      const { filters } = thunkAPI.getState()?.products;
      const { error, data } = await api.getMidCategories(filters);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchTrendingProducts = createAsyncThunk(
  "products/fetchTrendingProducts",
  async (a, thunkAPI) => {
    try {
      const { error, data } = await api.getTrendingProducts();
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  midCategory:[],
  topCategory:[],
  productList: [],
  productStatus: "idle", // "idle" | "loading" | "succeeded" | "failed" https://angry.shinewebtech.in/api/get_mid_category.php?top_category_id=1
  error: null,
  filters: [{ product_category: [] }, { search_id: "" }],
  // Trending Products Status
  trendingProducts: [],
  trendingStatus: "idle",
  trendingError: null
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
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
          state.topCategory = action.payload;
      })
      .addCase(fetchMidCategory.fulfilled, (state, action) => {
        state.midCategory = action.payload;
      })
      // trending Products
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.trendingStatus = "loading";
      })
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.trendingStatus = "succeeded";
        state.trendingProducts = action.payload;
      })
      .addCase(fetchTrendingProducts.rejected, (state, action) => {
        state.trendingStatus = "failed";
        state.error = action.error.message;
      })
  },
});

export const { setFilters } = productSlice.actions;

export default productSlice.reducer;
