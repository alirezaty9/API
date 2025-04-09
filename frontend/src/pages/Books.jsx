// Books.jsx
import React from 'react'

import BookList from "../components/BookList";
import AddBookForm from "../components/AddBookForm";

const Books = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <AddBookForm />
      <BookList />
    </div>
  );
};

export default Books;
