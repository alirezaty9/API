// LoginForm.jsx
import React from 'react'

import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`ورود موفق: ${data.username}`);
    } else {
      setMessage(data.message);
    }

    setUser({ username: "", email: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ورود کاربر</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={user.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={user.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ورود
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
