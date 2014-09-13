define(function(require) {
    'use strict';

    var Router = require('director');
    var $ = require('jquery');
    var L = require('leaflet');
    var moment = require('moment');
    var _ = require('underscore');
    require('esri-leaflet');

    var log = require('lib/logger');

    var Application = function() {
    };

    Application.prototype.run = function() {
        var home = function() {
            log.info('home url');
        };
        var map = function() {
            log.info('map url');
        };
        var routes = {
            '/': home,
            '/map': map
        };

        var router = new Router(routes);
        router.configure({
            html5history: true
        });
        router.init();

        log.info('Success?');
        $('#test').text('Hello world!');
        log.info(_.extend({}, {}));
        log.info(moment().format());

        var esriMap = L.map('map').setView([35.221646, -80.845350], 13);
        L.esri.basemapLayer('Streets', {detectRetina: true}).addTo(esriMap);
        esriMap.locate({setView: true, maxZoom: 16});
    };

    return Application;
});
