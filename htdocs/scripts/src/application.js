define(function(require) {
    'use strict';

    var Router = require('src/router');

    var Application = function() {
    };

    Application.prototype.run = function() {
        this.router = new Router();
        this.router.initialize();
    };

    return Application;
});
