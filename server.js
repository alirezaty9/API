const http = require("http");
const fs = require("fs");
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
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
