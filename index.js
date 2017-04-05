
var Haml = require('hamljs');
var fs = require('fs');

var haml = fs.readFileSync('static/hh.haml','utf8');
var hamlData = {};

var s = Haml.render(haml, {locals: hamlData});
console.log(s);

fs.writeFileSync('index.html', s);

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  app.use(express.static(__dirname + "/static"));
  res.sendfile('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Server OK');