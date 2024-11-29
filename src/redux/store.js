import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    // gọi ra các slice
    userSlice: userSlice,
  },
});

export default store;
