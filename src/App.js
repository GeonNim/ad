import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './sign-in/SignIn';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path="/" element={<SignIn />} />

      {/* 보호된 경로 */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
