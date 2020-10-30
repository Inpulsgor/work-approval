import axios from "axios";
// import io from "socket.io";
import io from "socket.io-client";
const qs = require("querystring");

const url = "http://testapi.marit.expert:3003";
axios.defaults.baseURL = "http://testapi.marit.expert:3003";

const config = {
  headers: {
    Accept: "application/x-www-form-urlencoded",
  },
  Secure: true,
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
    },
    withCredentials: true,
    credentials: "same-origin",
  });

// WSocket

// const socket = io(url);
const socket = io(url, { transports: ["websocket"], cookie: true });

export default { login, logout, check, socket };
