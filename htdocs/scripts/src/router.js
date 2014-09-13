define(function(require) {
    'use strict';

    var DirectorRouter = require('director');

    var log = require('lib/logger');
    var DescriptionView = require('src/views/description');
    var HomeView = require('src/views/home');
    var MapView = require('src/views/map');

    var Router = function() {
        var routes = {
            '/': this.home.bind(this)
        };
        ['police', 'fire', 'ambulance', 'community'].forEach(function(type) {
            routes['/' + type] = {
                '/(.*)/': this.description.bind(this, type),
                on: this.map.bind(this, type)
            };
        }, this);
        this.directorRouter = new DirectorRouter(routes);
        this.directorRouter.param('fullAddress', /(.+)/);
        this.directorRouter.configure({
            html5history: true
        });
    };

    Router.prototype.initialize = function() {
        this.directorRouter.init();
    };

    Router.prototype.setRoute = function(options) {
        this.directorRouter.setRoute(options.path);
    };

    Router.prototype.setView = function(View, options) {
        if (this.view) {
            this.view.dispose();
        }

        this.view = new View(options);
        this.view.initialize();
        this.view.render();
        this.view.on('route', this.setRoute.bind(this));
    };

    Router.prototype.description = function(type, fullAddress) {
        fullAddress = decodeURIComponent(fullAddress);
        this.setView(DescriptionView, {
            $el: '.siteContainer',
            type: type,
            fullAddress: fullAddress
        });
    };

    Router.prototype.home = function() {
        this.setView(HomeView, {
            $el: '.siteContainer'
        });
    };

    Router.prototype.map = function(type) {
        this.setView(MapView, {
            $el: '.siteContainer',
            type: type
        });
    };

    return Router;
});
