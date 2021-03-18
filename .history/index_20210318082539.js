//pre-bundles node modules
const fs = require('fs');
//const url = require("url");
//const http = require('http');

const express = require('express'); //third party - install with yarn add express or npm install express --save
const app = express();

const PORT = 3000;
const HOST = "localhost";

app.get('/', (req, res) => {

});


let server = http.createServer((req, res) =>
 {

    let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);
    let path = parsedURL.pathname.replace(/^\/+|\/+\/+$/g, "");



    switch (path) 
    {
      case "":
      case "home":
        path = "index.html";
        break;
      case "about":
        path = "index.html";
        break;
      case "services":
        path = "index.html";
        break;
      case "contact":
        path = "index.html";
        break;
      case "contact-list":
        path = "index.html";
        break;
      case "projects":
        path = "index.html";
        break;
      case "register":
        path = "index.html";
        break;
      case "login":
        path = "index.html";
        break;
      case "edit":
        path = "index.html";
        break;
      default:
        path = "404.html";  
        break;
    }

    let file = __dirname + "/" +  path;

     fs.readFile(file, function (err, data) 
     {
         if (err) 
         {
             res.writeHead(404);
             res.end("ERROR - 404 - PAGE NOT FOUND.");
             return;
         }
            
         res.setHeader("X-Content-Type-Options", "nosniff"); //security: avoids mime sniffing
         let mime = lookup(path);
         res.writeHead(200, { "Content-type": mime });
         res.end(data);
     });
 });

server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);



