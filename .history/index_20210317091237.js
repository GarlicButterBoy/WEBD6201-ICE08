const fs = require('fs');
const http = require('http');

const PORT = 3000;
const HOST = "localhost";

let server = http.createServer((req, res) =>
 {
    //console.log(req);
    //console.log(__dirname);

    let path = req.url;

    if(path == "/" || path == "\\")
    {
        path="/index.html";
    }

    switch(path)
    {
        case "/":
        case "\\":
            
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



