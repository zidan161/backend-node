import express from 'express';
var app = express();

const path = __dirname + "/views/index.html"

app.get('/', function(req, res) {
    res.sendFile(path);
})

export default app;