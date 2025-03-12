import * as api from "../api/AuthApi";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const loginFun = createAsyncThunk(
"auths/loginApi",
async (info,thunkAPI)=>{
    try {
       const {error,data} = await api.loginApi(info);
       if(error){
        return thunkAPI.rejectWithValue(error);
       }
    return data;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
}
);

export const registerFun= createAsyncThunk("auths/RegisterApi",
    async (info,thunkAPI)=>{
        try {
            const {error,data}=await api.RegisterApi(info);
            if(error){
                return thunkAPI.rejectWithValue(error);
            }
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)

const user = localStorage.getItem("user") ? 
JSON.parse(localStorage.getItem("user")) : null;
const initialState={
    user,
    loginSuccess: false,
    error: null,
    isAuthenticate: false,
    isLoginLoading: false,
    isRegLoading:false,
    isRegSuccess:false,
};
const  AuthSlice = createSlice({
    name :"auths",
    initialState,
    extraReducers:(builder)=>{
        builder
        //login
        .addCase(loginFun.pending,(state,action)=>{
            state.isLoginLoading=true;
        })
        .addCase(loginFun.fulfilled, (state, action) => {
            state.isLoginLoading=false;
            state.loginSuccess=true;
            state.isAuthenticate=true;
                localStorage.setItem("user", JSON.stringify(action.payload));
              })
              .addCase(loginFun.rejected, (state, action) => {
                // state.loginSuccess=false;
                state.isLoginLoading=false
                state.error=action.payload;
              })
              .addCase(registerFun.pending,(state,action)=>{
                state.isRegLoading=false;
              })
              .addCase(registerFun.fulfilled,(state,action)=>{
                state.isRegLoading=false;
                state.isRegSuccess=true;
              }).addCase(registerFun.rejected,(state,action)=>{
                state.isRegLoading=false;
                state.isRegSuccess=false;
                state.error=action.paylaod;
              })
    }
});
export default AuthSlice.reducer;