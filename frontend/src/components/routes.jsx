// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Users from "./pages/Users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
