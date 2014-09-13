define(function(require) {
    'use strict';

    var $ = require('jquery');
    var L = require('leaflet');
    var moment = require('moment');
    var _ = require('underscore');
    require('esri-leaflet');

    var log = require('lib/logger');

    var Application = function() {
    };

    Application.prototype.run = function() {
        log.info('Success?');
        $('#test').text('Hello world!');
        log.info(_.extend({}, {}));
        log.info(moment().format());

        var map = L.map('map').setView([35.221646, -80.845350], 13);
        L.esri.basemapLayer('Streets', {detectRetina: true}).addTo(map);
        map.locate({setView: true, maxZoom: 16});
    };

    return Application;
});
