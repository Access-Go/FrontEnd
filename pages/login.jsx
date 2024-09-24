// /pages/login.jsx

import React from 'react';
import LoginForm from '@/components/Organism/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-[450px]">
      <LoginForm />
    </div>
  </div>
  );
};

export default LoginPage;
