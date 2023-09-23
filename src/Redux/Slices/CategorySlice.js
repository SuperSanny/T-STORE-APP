import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  categoryList: [],
};
export const gatAllCategory = createAsyncThunk(
  "category/gatAllCategory",
  async () => {
    try {
      const response = await axiosInstance.get("/category");
      return response?.data;
    } catch (err) {
      toast.error("Something went wrong. Can not Load Products");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gatAllCategory.fulfilled, (state, action) => {
      if (action.payload) {
        state.categoryList = action.payload;
      } else {
        state.categoryList = [];
      }
    });
  },
});
export default categorySlice.reducer;
