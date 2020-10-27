import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialState = { name: null, password: null };

const auth = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.login,
  [authActions.logoutSuccess]: () => initialState,
  [authActions.checkSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.checkError]: (_, { payload }) => payload,
});

export default combineReducers({
  auth,
  error,
});
