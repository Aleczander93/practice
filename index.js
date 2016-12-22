
var express = require('express');
var server = express();

var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/public'));

server.listen(port, function(){
  console.log('listneing on port...', port);
});
