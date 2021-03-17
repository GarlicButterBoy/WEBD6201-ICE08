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
        case "/home":
            path="/index.html";
            break; 
            case "/about":
                break; 
            case "/services", 
            break;
            case "/contact", 
            break;
            case "/contact-list", 
            break;
            case "/projects", 
            break;
            case "/register", 
            break;
            case "/login": 
            break;
            case "/edit":
                break;
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



