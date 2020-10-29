import axios from "axios";
import io from "socket.io-client";
const qs = require("querystring");

const url = "http://testapi.marit.expert:3003";
axios.defaults.baseURL = "http://testapi.marit.expert:3003";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const login = (credentials) =>
  axios.post("/auth", qs.stringify(credentials), config);

const logout = () => axios.get("/logout");

const check = () => axios.get("/check");

// WSocket

const socket = io(url, { transports: ["websocket"], cookie: true });
// const socket = io(url);

export default { login, logout, check, socket };
