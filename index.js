// write your code here
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World')
});

server.listen(PORT, 'localhost', null, () => {
  console.log(`Server is listening on localhost:${PORT}`)
});
