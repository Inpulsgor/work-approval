import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import loaderSlice from "./loader/loaderSlice";
import authReducer from "./auth/authReducer";

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    auth: authReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
