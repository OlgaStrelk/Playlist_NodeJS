const fs = require("fs");
const path = require("path");
const http = require("http");
const { generateMainView } = require("./views");

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  const dataPath = path.join(__dirname, "data.json");
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const markup = generateMainView([]);

  res.end(markup);
});

server.listen(PORT);
