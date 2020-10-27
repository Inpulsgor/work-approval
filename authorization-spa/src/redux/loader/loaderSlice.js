import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export default createSlice({
  name: "loader",
  initialState,
  reducers: {
    loadingTrue: (state) => ({ ...state, isLoading: true }),
    loadingFalse: (state) => ({ ...state, isLoading: false }),
  },
});
