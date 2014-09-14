define(function(require) {
    'use strict';

    var _ = require('underscore');
    var L = require('leaflet');
    require('esri-leaflet-geocoder');

    var log = require('lib/logger');
    var BaseView = require('lib/base/view');
    var template = require('hbs!templates/map');
    var popupTemplate = require('hbs!templates/map/popup');

    var MapView = function() {
        BaseView.apply(this, arguments);
    };

    _.extend(MapView.prototype, BaseView.prototype);

    MapView.prototype.template = template;

    MapView.prototype.initialize = function() {
        BaseView.prototype.initialize.apply(this, arguments);

        this.$el.on('click', '.js-select-location', this.locationSelected.bind(this));
        this.$el.on('click', '.js-go-back', this.emit.bind(this, 'route', {path: '/'}));
    };

    MapView.prototype.render = function() {
        BaseView.prototype.render.apply(this, arguments);

        this.esriMap = L.map('map');
        this.esriMap.setView([35.221646, -80.845350], 13);

        L.esri.basemapLayer('Streets', {detectRetina: true}).addTo(this.esriMap);

        this.esriMap.locate({setView: true, maxZoom: 16});

        this.esriMap.on('locationfound', this.locationFound.bind(this));
        this.esriMap.on('click', this.mapClicked.bind(this));
    };

    MapView.prototype.locationFound = function(event) {
        this.geocode(event.latlng);
    };

    MapView.prototype.mapClicked = function(event) {
        this.geocode(event.latlng);
    };

    MapView.prototype.geocode = function(latlng) {
        var geocodeService = new L.esri.Services.Geocoding();
        geocodeService.reverse(latlng, {}, this.addressFound.bind(this));
    };

    MapView.prototype.addressFound = function(error, result) {
        if (error) {
            throw new Error(error);
        }

        log.info(result);

        if (this.marker) {
            this.esriMap.removeLayer(this.marker);
        }

        var popupHtml = popupTemplate(result);
        this.marker = L.marker(result.latlng)
        .addTo(this.esriMap)
        .bindPopup(popupHtml)
        .openPopup();

        this.result = result;
    };

    MapView.prototype.formatAddress = function(result) {
        var address = '';
        address += result.address + ', ';
        address += result.city + ', ';
        address += result.region + ' ';
        address += result.postal;
        return address;
    };

    MapView.prototype.locationSelected = function(event) {
        this.emit('route', {
            path: '/' + this.attributes.type + '/' + encodeURIComponent(this.formatAddress(this.result))
        });
    };

    return MapView;
});
