// Users.jsx
import React from 'react'

import AddUserForm from "../components/AddUserForm";
import UserList from "../components/UserList";

const Users = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <AddUserForm />
      <UserList />
    </div>
  );
};

export default Users;
