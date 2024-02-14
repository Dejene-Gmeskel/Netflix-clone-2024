import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
