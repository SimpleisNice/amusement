const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("ok");
});

server.listen("3000", () => console.log("SERVER START"));
