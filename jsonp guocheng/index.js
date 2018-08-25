var http = require('http');





http.createServer(function(request, response) {

  
  response.end('xx({a:12222})');
  

}).listen(7000);
