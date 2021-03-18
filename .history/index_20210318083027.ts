//pre-bundles node modules
import fs = require('fs');
//const url = require("url");
//const http = require('http');

import express = require('express'); //third party - install with yarn add express or npm install express --save
const app = express();

const PORT = 3000;
const HOST = "localhost";

app.get('/', (req, res) => 
{
  res.send('Hello World');
});

app.listen(port, () => 
{
  console.log(`Server running at http://${HOST}:${PORT}/`);
});


/*
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
*/





