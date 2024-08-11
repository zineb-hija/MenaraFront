// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

export const login = async (username, password) => {
  const response = await axios.post(API_URL + 'user/login', { username, password });
  console.log(response.data); // Log the response data to check if 'id' is present
  if (response.data.token) {
    // Store the token and user information, including the id, in local storage
    localStorage.setItem('user', JSON.stringify({
      token: response.data.token,
      id: response.data.userId,
      role: response.data.role,
      // Store any other data you might need
    }));
  }
  return response.data;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const logout = () => {
  localStorage.removeItem('user');
};
