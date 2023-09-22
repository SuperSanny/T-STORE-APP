import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "../Redux/Slices/AuthSlice";
import productSliceReducer from "../Redux/Slices/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
