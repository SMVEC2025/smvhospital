import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://smvhospital-yaze.vercel.app/api',
});

export default axiosInstance;