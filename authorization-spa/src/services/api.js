
import axios from 'axios';

axios.defaults.baseURL = 'http://testapi.marit.expert:3003';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const login = credentials => axios.post('/auth/login', credentials);

const logout = () => axios.post('/auth/logout');



export default {};