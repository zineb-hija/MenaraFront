import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const user = getCurrentUser();
 // console.log('RoleBasedRoute user:', user); // Log des données utilisateur
  return user && allowedRoles.includes(user.role) ? children : <Navigate to="/login" />;
};

export default RoleBasedRoute;
