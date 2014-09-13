'use strict';

var express = require('express');
var http = require('http');
var requireFrom = require('requirefrom');

var log = requireFrom('server/lib/')('logger');
var routes = requireFrom('server/src/')('routes');

var Application = function(options) {
    this.app = express();

    // Use static middleware
    this.app.use(express.static(__dirname + '/../../htdocs'));
    this.app.use('/components', express.static(__dirname + '/../../bower_components'));

    this.app.get('/', routes.home);
    this.app.get('/map', routes.home);
};

Application.prototype.run = function() {
    var server = http.createServer(this.app);

    // Start listening for HTTP requests
    var port = process.env.HTTP_SERVER_PORT;
    server.listen(port);
    log.info('Listening on port ' + port);
};

module.exports = Application;
