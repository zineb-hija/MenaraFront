import axios from 'axios';

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/user/login', { username, password });
    if (response.data) {
      console.log('Login response data:', response.data); // Debugging line
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('userId', response.data.userId); // Store as string
      localStorage.setItem('token', response.data.token); // Correctly store the token
      console.log(localStorage.getItem('userId')); // Should log the userId

    } else {
      console.warn('Unexpected response structure:', response.data);
    }
    return response.data.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('user'); // Optionally remove user data as well
};
