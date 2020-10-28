import api from "../../services/api";
import authSlice from "./authSlice";
import loaderSlice from "../loader/loaderSlice";

// login
const login = (credentials) => (dispatch) => {
  dispatch(loaderSlice.actions.loadingTrue());

  api
    .login(credentials)
    .then(({ data }) => {
      console.log("data", data);
      dispatch(authSlice.actions.clearError());

      if (data.err) {
        dispatch(authSlice.actions.loginError(data.err));
        return;
      }
      if (data.success) {
        dispatch(authSlice.actions.loginStatus(data.success));
        dispatch(authSlice.actions.loginSuccess(data));
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
      console.log(res);
      dispatch(authSlice.actions.logoutSuccess());
      dispatch(authSlice.actions.clearError());
    })
    .catch((error) => dispatch(authSlice.actions.logoutError(error)))
    .finally(dispatch(loaderSlice.actions.loadingFalse()));
};

export default { login, logout };
