import axios from "axios";

import api from "../../services/api";
import authSlice from "./authSlice";
import loaderSlice from "../loader/loaderSlice";

axios.defaults.baseURL = "http://testapi.marit.expert:3003";

// login
const login = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.loadingTrue());

  api
    .login(credentials)
    .then(({ data }) => {
      dispatch(authSlice.actions.clearError());

      if (data.err) {
        dispatch(authSlice.actions.loginError(data.err));
        return;
      }
      if (data.success) {
        api.token.set(data.success);
        dispatch(authSlice.actions.loginSuccess(data.success));
      }
    })
    .catch((error) => dispatch(authSlice.actions.loginError(error)))
    .finally(dispatch(loaderSlice.actions.loadingFalse()));
};

// logout
const logout = () => (dispatch) => {
  dispatch(loaderSlice.actions.loadingTrue());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authSlice.actions.logoutSuccess());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(loaderSlice.actions.loadingFalse()));
};

export default { login, logout };
