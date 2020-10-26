
import axios from 'axios';

axios.defaults.baseURL = 'http://testapi.marit.expert:3003';


// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const login = credentials => axios.post('/auth', credentials);
const check = () => axios.get('/check');
const logout = () => axios.get('/logout');



export default { token, login, check, logout};