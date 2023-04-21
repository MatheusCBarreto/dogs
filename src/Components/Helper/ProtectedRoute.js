import React, { useContext } from 'react';
import { UserContext } from '../../useContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
