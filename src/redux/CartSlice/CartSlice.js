import * as api from "../api/CartApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (cartData, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState()?.auths;

      const newCartData = {
        ...cartData,
        cus_id: user?.user_id,
      };

      const { error, data } = await api.addToCartApi(newCartData);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCartById = createAsyncThunk(
  "cart/fetchCartById",
  async (a, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState()?.auths;

      const { error, data } = await api.getCartById(user?.user_id);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCartLocalData = createAsyncThunk(
  "cart/fetchCartLocalData",
  async (localData, thunkAPI) => {
    try {
      const { error, data } = await api.getCartLocalData(localData);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState()?.auths;
      const { error, data } = await api.removeFromCartApi(id, user?.user_id);
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
  cartList: [],
  cartStatus: "idle", // "idle" | "loading" | "succeeded" | "failed"
  cartError: null,
  cartLocalData: [],
  addToCartStatus: "idle", // "idle" | "loading" | "succeeded" | "failed"
  addToCartSuccess: false,
  addToCartError: null,
  removeFromCartSuccess: false,
  removeFromCartError: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAddToCartError: (state) => {
      state.addToCartError = null;
    },
    removeAddToCartSuccess: (state) => {
      state.addToCartSuccess = false;
    },
    setRemoveFromCartSuccess: (state) => {
      state.removeFromCartSuccess = false;
    },
    setRemoveFromCartError: (state) => {
      state.removeFromCartError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch cart by id
      .addCase(fetchCartById.pending, (state) => {
        state.cartStatus = "loading";
      })
      .addCase(fetchCartById.fulfilled, (state, action) => {
        state.cartStatus = "succeeded";
        state.cartList = action.payload;
      })
      .addCase(fetchCartById.rejected, (state, action) => {
        state.cartStatus = "failed";
        state.cartError = action.payload;
      })
      // fetch local cart
      .addCase(fetchCartLocalData.pending, (state) => {})
      .addCase(fetchCartLocalData.fulfilled, (state, action) => {
        state.cartLocalData = action.payload;
      })
      .addCase(fetchCartLocalData.rejected, (state, action) => {
        state.cartLocalData = [];
      })
      // add to cart
      .addCase(addToCart.pending, (state) => {
        state.addToCartStatus = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.addToCartStatus = "succeeded";
        state.addToCartSuccess = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.addToCartStatus = "failed";
        state.addToCartSuccess = false;
        state.addToCartError = action.payload;
      })
      // remove from cart
      .addCase(removeFromCart.pending, (state) => {})
      .addCase(removeFromCart.fulfilled, (state) => {
        state.removeFromCartSuccess = true;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.removeFromCartSuccess = false;
        state.removeFromCartError = action.payload;
      });
  },
});

export const {
  removeAddToCartError,
  removeAddToCartSuccess,
  setRemoveFromCartError,
  setRemoveFromCartSuccess,
} = CartSlice.actions;

export default CartSlice.reducer;
