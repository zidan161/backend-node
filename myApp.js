var express = require('express');
var app = express();

var path = __dirname + '/views/index.html'

app.get('/', function(req, res) {
    res.sendFile(path);
})

module.exports = app;