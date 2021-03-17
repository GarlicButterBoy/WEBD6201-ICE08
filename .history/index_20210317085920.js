const fs = require('fs');
const http = require('http');

const PORT = 3000;
const HOST = "localhost";

let server = http.createServer((req, res) =>
 {
     fs.readFile(__dirname + req.url, function (err, data) {
         if (err) {
             res.writeHead(404);
             res.end(JSON.``)
         }
     })
    res.writeHead(200, 
        {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!');
});



server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);



