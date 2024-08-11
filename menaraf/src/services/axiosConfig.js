import axios from 'axios';
import { getCurrentUser } from './authService';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.token) {
      config.headers['Authorization'] = `Bearer ${currentUser.token}`;
      console.log('Authorization Header:', config.headers['Authorization']); // Debugging: Log the token
    } else {
      console.error('No token found');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const createOrder = (orderData, userId) => {
  return axiosInstance.post(`/rh/addencadrant/${userId}`, orderData);
};

export const updateOrder = (username, userId, orderData) => {
  return axiosInstance.put(`/rh/updateencadrant/${userId}/${username}`, orderData);
};

export const fetchOrders = (userId) => {
  return axiosInstance.get(`/rh/encadrants/${userId}`);
};

export default axiosInstance;
