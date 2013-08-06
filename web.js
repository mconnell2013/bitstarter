var express = require('express');
var fs = require ('fs');
//var buf = require('buf');
//var binaryText = fs.readFileSync('./index.html', 'ascii');
//var displayText = binaryText.toString(binaryText, 'ascii');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
//  console.log(displayText);
    var html = fs.readFileSync(htmlfile).toString();
//    response.send(displayText);
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
