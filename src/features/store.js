import { configureStore } from "@reduxjs/toolkit";
import userFormReducer from "./userForm/userFormSlice";

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
  },
});