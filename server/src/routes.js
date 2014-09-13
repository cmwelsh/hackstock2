'use strict';

var path = require('path');

var home = function(req, res) {
    res.sendFile(path.normalize(__dirname + '/../../htdocs/index.html'));
};

module.exports = {
    home: home
};
