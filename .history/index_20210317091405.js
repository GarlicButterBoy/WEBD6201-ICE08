const fs = require('fs');
const http = require('http');

const PORT = 3000;
const HOST = "localhost";

let server = http.createServer((req, res) =>
 {
    //console.log(req);
    //console.log(__dirname);

    let path = req.url;

    switch(path)
    {
        case "/":
        case "\\":
            ase "/home":
            path="/index.html";
            break; 
            c, 
            case "/about", 
            case "/services", 
            case "/contact", 
            case "/contact-list", 
            case "/projects", 
            case "/register", 
            case "/login", 
            case "/edit"
    }


     fs.readFile(__dirname + path, function (err, data) 
     {
         if (err) 
         {
             res.writeHead(404);
             res.end("ERROR - 404 - PAGE NOT FOUND.");
             return;
         }
         res.writeHead(200);
         res.end(data);
     });
 });

server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);



