const http = require('http');

const PORT = 3000;
const HOST =

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!');
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');