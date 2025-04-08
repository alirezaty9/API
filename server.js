const http = require("http");
const fs = require("fs");
const url = require("url");
const db = require("./db.json");
console.log(db);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    fs.readFile("db.json", (err, data) => {
      if (err) throw err;

      const db = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(db.users));
      res.end();
    });
  } else if (req.method === "GET" && req.url === "/api/books") {
    fs.readFile("db.json", (err, data) => {
      if (err) throw err;
      const db = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(db.books));
      res.end();
    });
  } else if (req.method === "GET" && req.url === "/api/all") {
    fs.readFile("db.json", (err, data) => {
      if (err) throw err;
      const db = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(db));
      res.end();
    });
  } else if (req.method === "DELETE") {
    const parsedUrl = url.parse(req.url, true);

    const bookId = parsedUrl.query.id;
    const newBook = db.books.filter((book) => book.id != bookId);

    fs.writeFile(
      "db.json",
      JSON.stringify({ ...db, books: newBook }),
      (err) => {
        if (err) throw err;
        console.log("Data has been written to file");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Book deleted successfully" }));
        res.end("test response");
      }
    );
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
