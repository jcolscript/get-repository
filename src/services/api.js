import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token 5337717d5585eff4b95a8965bb4b03e368c88b1b',
  },
});

export default api;
