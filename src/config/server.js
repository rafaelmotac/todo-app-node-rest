const port = 3000;
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const allowcors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowcors);

server.listen(port, function(req, res){
    console.log(`listen on port: ${port}.`);
});

module.exports = server;