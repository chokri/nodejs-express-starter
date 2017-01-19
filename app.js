var fs = require('fs');
var http = require('http');
// var https = require('https');
var bodyparser = require('body-parser');
var socket = require('socket.io');
var routes = require('./routes');

// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

app.use(bodyparser());

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

app.get('/', routes.index);

app.post('/configs', routes.configs)

httpServer.listen(8080);
// httpsServer.listen(8443);
var io = require('socket.io').listen(httpServer);

io.sockets.on('connection',function (socket) {
    // TO-DO

    socket.on('messages', function(msg){
      console.log(msg);
    })
});
