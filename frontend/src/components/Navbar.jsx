import React from 'react'

// Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md px-6 py-4 mb-6">
      <ul className="flex space-x-6">
        <li>
          <Link className={isActive("/")} to="/">
            خانه
          </Link>
        </li>
        <li>
          <Link className={isActive("/books")} to="/books">
            کتاب‌ها
          </Link>
        </li>
        <li>
          <Link className={isActive("/users")} to="/users">
            کاربران
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
