import * as api from "../api/AuthApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const loginFun = createAsyncThunk(
  "auths/loginApi",
  async (info, thunkAPI) => {
    try {
      const { error, data } = await api.loginApi(info);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerFun = createAsyncThunk(
  "auths/RegisterApi",
  async (info, thunkAPI) => {
    try {
      const { error, data } = await api.RegisterApi(info);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const userDetailsFun = createAsyncThunk(
  "auths/userDetailsFun",
  async (id, thunkAPI) => {
    try {
      const { error, data } = await api.userDetails(id);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const userDeliveryAddress = createAsyncThunk(
  "auths/userDeliveryAddress",
  async (userAddress, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState()?.auths;
      const { error, data } = await api.userDeliveryAddressApi({
        ...userAddress,
        user_id: user?.user_id,
      });
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const verifyEmailOtp = createAsyncThunk(
  "auths/verifyEmailOtp",
  async (otp, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState()?.auths;
      const { error, data } = await api.verifyEmail({
        otpArray: otp,
        user_id: user?.user_id,
      });
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user,
  // login
  loginSuccess: false,
  error: null,
  isLoginLoading: false,
  // registration
  isRegLoading: false,
  isRegSuccess: false,
  isRegError: null,
  // user details
  userInfo: null,
  userExtraInfo: null,
  userDelivertAddressLoading: false,
  userDeliveryAddressSuccess: false,
  // verify Email
  emailLoading: "idle",
  emailSuccess: false,
  emailError: null,
};
const AuthSlice = createSlice({
  name: "auths",
  initialState,
  reducers: {
    setIsAuthenticate: (state, action) => {
      state.isAuthenticate = action.payload?.status;
    },
    removeUserDeliveryAddressSuccess: (state) => {
      state.userDeliveryAddressSuccess = false;
    },
    removeEmailError: (state) => {
      state.emailError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginFun.pending, (state, action) => {
        state.isLoginLoading = true;
      })
      .addCase(loginFun.fulfilled, (state, action) => {
        state.isLoginLoading = false;
        state.loginSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginFun.rejected, (state, action) => {
        // state.loginSuccess=false;
        state.isLoginLoading = false;
        state.error = action.payload;
      })
      // Register
      .addCase(registerFun.pending, (state, action) => {
        state.isRegLoading = true;
      })
      .addCase(registerFun.fulfilled, (state, action) => {
        state.isRegLoading = false;
        state.isRegSuccess = true;
      })
      .addCase(registerFun.rejected, (state, action) => {
        state.isRegLoading = false;
        state.isRegSuccess = false;
        state.isRegError = action.payload;
      })
      // user Details
      .addCase(userDetailsFun.pending, (state, action) => {})
      .addCase(userDetailsFun.fulfilled, (state, action) => {
        state.userInfo = action.payload?.data;
        state.userExtraInfo = action.payload?.extra;
      })
      .addCase(userDetailsFun.rejected, (state, action) => {})
      // user Delivery Address
      .addCase(userDeliveryAddress.pending, (state, action) => {
        state.userDelivertAddressLoading = true;
      })
      .addCase(userDeliveryAddress.fulfilled, (state, action) => {
        state.userDelivertAddressLoading = false;
        state.userDeliveryAddressSuccess = true;
      })
      .addCase(userDeliveryAddress.rejected, (state, action) => {
        state.userDelivertAddressLoading = false;
        state.userDeliveryAddressSuccess = false;
      })
      // Verify Email
      .addCase(verifyEmailOtp.pending, (state, action) => {
        state.emailLoading = "loading";
      })
      .addCase(verifyEmailOtp.fulfilled, (state, action) => {
        state.emailLoading = "succeded";
        state.emailSuccess = true;
      })
      .addCase(verifyEmailOtp.rejected, (state, action) => {
        state.emailLoading = "idle";
        state.emailError = action.payload;
      });
  },
});

export const {
  setIsAuthenticate,
  removeUserDeliveryAddressSuccess,
  removeEmailError,
} = AuthSlice.actions;

export default AuthSlice.reducer;
