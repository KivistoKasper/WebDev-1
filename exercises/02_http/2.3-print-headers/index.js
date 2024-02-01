const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {
    
    
    

    response.writeHead(200, { 'Content-Type': 'text/html' });
    let head = request.headers;
    response.write(JSON.stringify(head));
      
    response.end();
    
  }).listen(3000);