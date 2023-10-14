import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = axiosInstance.post("user/login", data);
    toast.promise(response, {
      loading: "Wait! authenticating your account...",
      success: "Successfully logined in",
      error: "Failed to authenticate your account",
    });
    return await response;
  } catch (error) {
    if (error?.response?.data?.err) {
      toast.error(error?.response?.data?.err);
    } else {
      toast.error("Cannot Login, something went wrong");
    }
  }
});

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = axiosInstance.post("user/signup", data);
    toast.promise(response, {
      loading: "Wait! Creating your account...",
      success: "Successfully signed up",
      error: "Failed to create your account",
    });
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Registration failed");
  } catch (error) {
    toast.error("Cannot Creating, something went wrong");
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.username = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action?.payload?.data) {
        state.isLoggedIn = action?.payload?.data?.data != undefined;
        state.username = action?.payload?.data?.data?.username;
        state.token = action?.payload?.data?.data?.token;
        localStorage.setItem(
          "isLoggedIn",
          action?.payload?.data?.data != undefined
        );
        localStorage.setItem("username", action?.payload?.data?.data?.username);
        localStorage.setItem("token", action?.payload?.data?.data?.token);
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
