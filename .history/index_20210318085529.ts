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
app.use(express.static(path.join(__dirname, 'Client')));
app.use(express.static(path.join(__dirname, 'Views')));
app.use(express.static(path.join(__dirname, 'Assets')));


//Routing
app.get('/', (req, res) => 
{
  displaySPA(res);
});

app.get('*', (req, res) => {
  
})

//starts the server and listens on PORT
app.listen(PORT, () => 
{
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

function displaySPA(res:any):void
{
  fs.readFile("index.html", (err, data) =>
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
 
}


