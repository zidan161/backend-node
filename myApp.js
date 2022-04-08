var express = require('express');
var app = express();

var path = __dirname + '/views/index.html'

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path);
})

module.exports = app;