// BookList.jsx
import React from 'react'

import { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:4000/api/books");
    const data = await res.json();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/api/books?id=${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  const handleBack = async (id) => {
    await fetch(`http://localhost:4000/api/books/back?id=${id}`, {
      method: "PUT",
    });
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">لیست کتاب‌ها</h2>
      <ul className="space-y-2">
        {books.map((book) => (
          <li
            key={book.id}
            className="border p-3 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-600">نویسنده: {book.author}</p>
              <p className="text-sm text-gray-600">قیمت: {book.price} تومان</p>
              <p className="text-sm text-gray-500">
                وضعیت: {book.free ? "آزاد" : "اجاره‌شده"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                حذف
              </button>
              {!book.free && (
                <button
                  onClick={() => handleBack(book.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  برگشت
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
