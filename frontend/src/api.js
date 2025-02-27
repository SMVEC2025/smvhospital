import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-backend-url.vercel.app/api',
});

export default axiosInstance;