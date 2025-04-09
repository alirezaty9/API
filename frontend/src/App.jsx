import React from 'react'

// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
