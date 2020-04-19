import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'token a6f83b2f546f33d25d06a6d61c933920494b5ca8',
  },
});

export default api;
