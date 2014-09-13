define(function(require) {
    'use strict';

    var $ = require('jquery');
    var moment = require('moment');
    var _ = require('underscore');

    var log = require('lib/logger');

    var Application = function() {
    };

    Application.prototype.run = function() {
        log.info('Success?');
        $('#test').text('Hello world!');
        log.info(_.extend({}, {}));
        log.info(moment().format());
    };

    return Application;
});
