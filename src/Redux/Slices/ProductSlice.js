import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
  productList: [],
};

export const gatAllProducts = createAsyncThunk(
  "product/gatAllProducts",
  async () => {
    try {
      const response = await axiosInstance.get("/tshirt");
      // console.log(response?.data?.tshirts);
      // toast.promise(response, {
      //   loading: "loading products data",
      //   success: "Successfully loaded all products",
      //   error: "something went wrong",
      // });
      return response?.data?.tshirts;
    } catch (err) {
      toast.error("Something went wrong. Can not Load Products");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gatAllProducts.fulfilled, (state, action) => {
      if (action.payload) {
        state.productList = action.payload;
      } else {
        state.productList = []; // Set a default value or empty array
      }
      // console.log("Product data received and updated:", state.productList);
    });
  },
});
export default productSlice.reducer;
