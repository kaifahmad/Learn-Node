const http = require('http');

const routes = require('./router');

const server = http.createServer(routes);
server.listen(4000);  