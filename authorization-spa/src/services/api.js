import axios from "axios";
// import io from "socket.io-client";

axios.defaults.baseURL = "http://testapi.marit.expert:3003";

const login = (credentials) => axios.post("/auth", credentials);

const logout = () => axios.get("/logout");

const check = () => axios.get("/check");

// WSocket

// const url = "http://testapi.marit.expert:3003";
// const session = io(url, { transports: ["websocket"], cookie: true });
// console.log(session);

export default { login, logout, check };
