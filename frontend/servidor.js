const http = require("http");
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static("express"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+'express/index.html'));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));