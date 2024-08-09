import axios from 'axios';

// Créer une instance d'Axios avec la configuration par défaut
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL de votre API backend
  headers: {
    'Content-Type': 'application/json'
  }
});

// Ajouter un intercepteur de requêtes pour ajouter le token JWT
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Ensure proper format
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Method to create a new encadrant
export const createOrder = (orderData, userId) => {
  return axiosInstance.post(`/rh/addencadrant/${userId}`, orderData);
};

// Method to update an existing encadrant
export const updateOrder = (orderId,userId, orderData) => {
  return axiosInstance.put(`/rh/updateencadrant/${userId}/${orderId}`, orderData);
};

export default axiosInstance;
