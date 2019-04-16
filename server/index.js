var express = require('express');
var db = require('../database');
var app = express();


app.use(express.static(__dirname + '/../client/dist'));

// app.get('/items', );

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

