"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//pre-bundles node modules
const fs = require("fs");
const path = require("path");
//const url = require("url");
//const http = require('http');
const express = require("express"); //third party - install with yarn add express or npm install express --save
const app = express();
const PORT = 3000;
const HOST = "localhost";
//static files include
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'Client')));
app.use(express.static(path.join(__dirname, 'Views')));
app.use(express.static(path.join(__dirname, 'Assets')));
//Default Route
app.get('/', (req, res) => {
    displaySPA(res);
});
//wild card route
app.get('*', (req, res) => {
    displaySPA(res);
});
//starts the server and listens on PORT
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
function displaySPA(res) {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("ERROR - 404 - PAGE NOT FOUND.");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}
//# sourceMappingURL=index.js.map