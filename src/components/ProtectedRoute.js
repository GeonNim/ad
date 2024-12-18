import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 상태 확인

  return isLoggedIn ? children : <Navigate to="/" replace />; // 상태에 따라 리다이렉트
};

export default ProtectedRoute;
