// Home.jsx
import React from 'react'

import LoginForm from "../components/LoginForm";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">خوش آمدید به سیستم مدیریت کتابخانه</h1>
      <LoginForm />
    </div>
  );
};

export default Home;
