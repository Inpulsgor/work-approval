import axios from "axios";
const qs = require("querystring");

axios.defaults.baseURL = "http://testapi.marit.expert:3003";

const config = {
  headers: {
    Accept: "application/x-www-form-urlencoded",
  },
  withCredentials: true,
};

const login = (credentials) =>
  axios.post("/auth", qs.stringify(credentials), config);

const logout = () => axios.get("/logout");

const check = () =>
  axios.get("/check", {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Cookie: "cookie=value",
    },
    withCredentials: true,
    credentials: "same-origin",
  });

export default { login, logout, check };
