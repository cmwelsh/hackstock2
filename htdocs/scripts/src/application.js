define(function(require) {
    'use strict';

    var $ = require('jquery');
    var L = require('leaflet');
    var moment = require('moment');
    var _ = require('underscore');
    require('esri-leaflet');

    var log = require('lib/logger');
    var Router = require('src/router');

    var Application = function() {
    };

    Application.prototype.run = function() {
        this.router = new Router();
        this.router.initialize();

        /*
        log.info('Success?');
        $('#test').text('Hello world!');
        log.info(_.extend({}, {}));
        log.info(moment().format());
        */
    };

    return Application;
});
