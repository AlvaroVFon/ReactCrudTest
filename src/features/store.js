import { configureStore } from "@reduxjs/toolkit";
import userFormReducer from "./userForm/userFormSlice";
import dataFetchReducer from "./dataFetch/dataFetchSlice";

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
    dataFetch: dataFetchReducer,
  },
});