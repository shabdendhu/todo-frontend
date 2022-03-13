/*eslint-disable*/
import axios from 'axios';
import constants from './constants';
const user = JSON.parse(localStorage.getItem('user'))
const token = user ? user.token : ''
export default axios.create({
  baseURL: `http://localhost:9000/api/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'x-access-token': `${token}`,
    // 'access-control-allow-origin':'http://localhost:3000'
  }
});