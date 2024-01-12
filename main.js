// on charge le module HTTP
var http = require('http');

// On configure le serveur HTTP
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello by JHassam\n");
});

// le server ecoute sur localhost:8080
server.listen(8080);
console.log("Server listening at http://127.0.0.1:8080/");