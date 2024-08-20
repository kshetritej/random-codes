import http from "http";

const server = http.createServer((req,res) => {
  console.log('request:', req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('welcome to the website')
  console.log('server created')
});

server.listen(4000, () => console.log('server listening on port 4000'))

