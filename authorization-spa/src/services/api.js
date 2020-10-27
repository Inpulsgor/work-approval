import axios from "axios";
// import io from "socket.io-client";

axios.defaults.baseURL = "http://testapi.marit.expert:3003";
// const url = "http://testapi.marit.expert:3003";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const login = (credentials) => axios.post("/auth", credentials);
const logout = () => axios.get("/logout");
const check = () => axios.get("/check");

// const socket = io(url);
// const session = io(url, { transports: ["websocket"], cookie: true });

export default { token, login, logout, check };
