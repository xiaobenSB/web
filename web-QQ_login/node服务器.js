const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
console.log(req.url)
 if(req.url==='/proxy?'){  //在node里#号后面的都匹配不到，包括#
	  res.statusCode = 200;
	  console.log(11111);
  res.setHeader('Content-Type', 'text/html');
  
  fs.readFile('./2.html', (err, data) => {
  res.end(data);
});  
	 
 }else{
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  fs.readFile('./1.html', (err, data) => {
  res.end(data);
});  

 }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
