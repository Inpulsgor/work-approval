import api from "../../services/api";
import authSlice from "./authSlice";
import loaderSlice from "../loader/loaderSlice";

// login
const login = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.loadingTrue());

  api
    .login(credentials)
    .then((response) => {
      console.log(response);
      dispatch(authSlice.actions.clearError());

      if (response.data.err) {
        dispatch(authSlice.actions.loginError(response.data.err));
        return;
      }
      if (response.data.success) {
        dispatch(authSlice.actions.loginStatus(response.data.success));
        dispatch(authSlice.actions.loginSuccess(response.data));
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
    .then((res) => {
      dispatch(authSlice.actions.logoutSuccess());
      dispatch(authSlice.actions.clearError());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(loaderSlice.actions.loadingFalse()));
};

export default { login, logout };
