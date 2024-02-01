const http = require('http');
 
http.createServer((request, response) => {

  response.writeHead(200, { 'Content-Type': 'text/html' });

  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    
    body = Buffer.concat(body).toString();
    bodyRev = body.split("").reduce((acc, char) => char + acc, "");
    response.end(bodyRev);
  });
  
}).listen(3000);