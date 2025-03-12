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
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (pid, thunkAPI) => {
    try {
      const { error, data } = await api.getProductById(pid);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "products/fetchCategory",
  async (a, thunkAPI) => {
    try {
      const { error, data } = await api.getCategories();
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
      const { error, data } = await api.getMidCategories();
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
  midCategory: [],
  topCategory: [],
  filters: [
    { filter_type: "", mcat_ids: [] },
    { max_price: "", min_price: "" },
    { search_term: "" },
  ],
  productList: [],
  productStatus: "idle", // "idle" | "loading" | "succeeded" | "failed"
  productError: null,
  // Trending Products Status
  trendingProducts: [],
  trendingStatus: "idle",
  trendingError: null,
  // Product Details
  productDetails: null,
  productDetailsStatus: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters[0] = action.payload[0];
      state.filters[1] = action.payload[1];
    },
    setFiltersSearch(state, action) {
      state.filters[2] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Products Fetching
      .addCase(fetchProducts.pending, (state) => {
        state.productStatus = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productStatus = "succeeded";
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productStatus = "failed";
        state.productError = action.error.message;
      })
      // Product Details
      .addCase(fetchProductById.pending, (state) => {
        state.productDetailsStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetailsStatus = "succeeded";
        state.productDetails = action.payload[0];
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productDetailsStatus = "failed";
      })
      // Top Category
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.topCategory = action.payload;
      })
      // Mid Category
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
      });
  },
});

export const { setFilters, setFiltersSearch } = productSlice.actions;

export default productSlice.reducer;
