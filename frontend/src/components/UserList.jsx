// UserList.jsx
import React from 'react'

import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:4000/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const upgradeUser = async (id) => {
    console.log(id)
    await fetch(`http://localhost:4000/api/users/upgrade?id=${id}`, {
      method: "PUT",
    });
    fetchUsers();
  };

  const setCrime = async (id, crime) => {
    console.log(id)

    await fetch(`http://localhost:4000/api/users?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ crime }),
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">لیست کاربران</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-3 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">ایمیل: {user.email}</p>
              <p className="text-sm text-gray-600">نقش: {user.role}</p>
              <p className="text-sm text-gray-600">جرایم: {user.crime}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => upgradeUser(user.id)}
                className="bg-purple-500 text-white px-3 py-1 rounded"
              >
                ارتقا
              </button>
              <button
                onClick={() => setCrime(user.id, user.crime + 1)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                + جرم
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;











