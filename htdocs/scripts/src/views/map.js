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
    };

    MapView.prototype.render = function() {
        BaseView.prototype.render.apply(this, arguments);

        this.esriMap = L.map('map').setView([35.221646, -80.845350], 13);
        L.esri.basemapLayer('Streets', {detectRetina: true}).addTo(this.esriMap);
        this.esriMap.locate({setView: true, maxZoom: 16});

        this.esriMap.on('click', this.mapClicked.bind(this));
    };

    MapView.prototype.mapClicked = function(event) {
        var geocodeService = new L.esri.Services.Geocoding();
        geocodeService.reverse(event.latlng, {}, this.addressFound.bind(this));
    };

    MapView.prototype.addressFound = function(error, result) {
        if (error) {
            throw new Error(error);
        }

        log.info(result);

        var popupHtml = popupTemplate(result);

        L.marker(result.latlng)
        .addTo(this.esriMap)
        .bindPopup(popupHtml)
        .openPopup();

        this.$el.find('.js-input').val(this.formatAddress(result));
    };

    MapView.prototype.formatAddress = function(result) {
        var address = '';
        address += result.address + ', ';
        address += result.city + ', ';
        address += result.region + ' ';
        address += result.postal;
        return address;
    };

    return MapView;
});
