// AddBookForm.jsx
import React from 'react'

import { useState } from "react";

const AddBookForm = () => {
  const [book, setBook] = useState({ title: "", author: "", price: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/books", {
      method: "POST",
      body: JSON.stringify(book),
    });

    const data = await res.json();
    setMessage(data.message);
    setBook({ title: "", author: "", price: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">افزودن کتاب جدید</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          placeholder="عنوان کتاب"
          value={book.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="نویسنده"
          value={book.author}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="قیمت"
          value={book.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ثبت کتاب
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default AddBookForm;
