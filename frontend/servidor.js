const http = require("http");
const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname+"/express"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname+'/express/index.html'));
});

http.createServer(app).listen(PORT, () => console.log("Servidor rodando local na porta %s",PORT));