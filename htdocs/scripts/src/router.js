define(function(require) {
    'use strict';

    var DirectorRouter = require('director');

    var log = require('lib/logger');
    var HomeView = require('src/views/home');
    var MapView = require('src/views/map');

    var Router = function() {
        var routes = {
            '/': this.home.bind(this),
            '/police': this.map.bind(this),
            '/fire': this.map.bind(this),
            '/ambulance': this.map.bind(this),
            '/emergency': this.map.bind(this)
        };

        this.directorRouter = new DirectorRouter(routes);
        this.directorRouter.configure({
            html5history: true
        });
    };

    Router.prototype.initialize = function() {
        this.directorRouter.init();
    };

    Router.prototype.setView = function(View, options) {
        if (this.view) {
            this.view.dispose();
        }

        this.view = new View(options);
        this.view.initialize();
        this.view.render();
    };

    Router.prototype.home = function() {
        log.info('home');
        this.setView(HomeView, {
            $el: '.siteContainer'
        });
    };

    Router.prototype.map = function() {
        log.info('map');
        this.setView(MapView, {
            $el: '.siteContainer'
        });
    };

    return Router;
});
