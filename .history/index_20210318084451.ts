//pre-bundles node modules
import fs = require('fs');
import path = require('path');
//const url = require("url");
//const http = require('http');

import express = require('express'); //third party - install with yarn add express or npm install express --save
const app = express();

const PORT = 3000;
const HOST:string = "localhost";

//static files include
app.use(express.static(path.join(__dirname, 'node_modules')));


//Routing
app.get('/', (req, res) => 
{
  res.status(200).send('Hello World');
});
//starts the server and listens on PORT
app.listen(PORT, () => 
{
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

function displaySPA(res)
{

}

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





