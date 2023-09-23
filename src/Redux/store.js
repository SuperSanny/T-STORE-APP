import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "../Redux/Slices/AuthSlice";
import productSliceReducer from "../Redux/Slices/ProductSlice";
import categorySliceReducer from "../Redux/Slices/CategorySlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productSliceReducer,
    category: categorySliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
