import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connection: null,
  error: "",
};

export default createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, { payload }) => ({ ...state, connection: payload }),
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    clearError: (state) => ({ ...state, error: "" }),
    logoutSuccess: () => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
