var express = require('express');
var http = require('http');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins');
});
 
app.listen(5000 );
 
module.exports = app;
