import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";
import spinnerSlice from "./spinnerSlice";
import userAdminSlice from "./userAdminSlice";

const store = configureStore({
  reducer: {
    // gọi ra các slice
    userSlice: userSlice,
    courseSlice: courseSlice,
    spinnerSlice: spinnerSlice,
    userAdminSlice: userAdminSlice,
  },
});

export default store;
