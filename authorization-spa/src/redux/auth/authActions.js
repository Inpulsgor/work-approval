import { createAction } from "@reduxjs/toolkit";

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const checkRequest = createAction("auth/checkRequest");
const checkSuccess = createAction("auth/checkSuccess");
const checkError = createAction("auth/checkError");

export default {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  checkRequest,
  checkSuccess,
  checkError,
};
