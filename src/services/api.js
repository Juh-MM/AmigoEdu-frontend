import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proleduca-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;