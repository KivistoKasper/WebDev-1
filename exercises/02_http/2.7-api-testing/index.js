const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = http.createServer(function (request, response) {

  if (request.url === '/homer') {
    readFileSendResponse('homer.html', 'text/html', response);
  }
  else if (request.url === '/bradbury') {
    readFileSendResponse('bradbury.html', 'text/html', response);
  }
  else if (request.url === '/') {
    readFileSendResponse('index.html', 'text/html', response);
  }
  else {
    response.statusCode = 404;
    response.statusMessage = 'Requested content not found';
    response.end();
  }
}).listen(3000);

/* 
  * @param {string} fileName - name of the file to be read
  * @param {string} contentType - type of the content to be sent in the response
  * @param {object} response - response object
  */
const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function (error, file) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
  })
}