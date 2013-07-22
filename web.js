var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    var s = buffer.toString();
    response.send(s);
});

var port = process.env.PORT || 9080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
