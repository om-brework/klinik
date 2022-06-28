import axios from 'axios';
const config = axios.create({
  baseURL:
    'http://ubud-taruna-medica.herokuapp.com/public/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default config;
