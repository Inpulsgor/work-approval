import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "http://testapi.marit.expert:3003";

// login
const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/auth", credentials)
    .then((response) => {
      console.log(response);
      //   dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

// logout
const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .get("/logout")
    .then(() => {
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

// check
const check = () => (dispatch, getState) => {
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/check")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => authActions.getCurrentUserError(error));
};

export default { login, logout, check };
