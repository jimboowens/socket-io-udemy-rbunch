const http = require('http');
// ws is a third party module, and http is a core module
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected");
});

const wss = new websocket.WebSocketServer({server});

server.listen(4444);