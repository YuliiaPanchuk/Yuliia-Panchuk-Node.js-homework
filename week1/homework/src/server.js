'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here

    switch (request.url) {
      case '/': // Default endpoint
        break;
      case '/state':  // Get current value of state
        break;
      case '/add':
        state += 1;
        break;
      case '/subtract':
        state -= 1;
        break;
      case '/reset':
        state = 10;
        break;
      default:
        response.statusCode = 404;
        let error = 'Not found';
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ error }, null, 2));
        return;
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ state }, null, 2));
  });

  return server;
}

module.exports = {
  createServer
};
