import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: null,
  connection: null,
  error: null,
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStatus: (state, { payload }) => ({
      ...state,
      isAuthenticated: payload,
    }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      connection: payload,
    }),
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    clearError: (state) => ({ ...state, error: null }),
    logoutSuccess: (state) => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
