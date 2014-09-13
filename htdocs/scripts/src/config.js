/* global requirejs: false */

requirejs.config({
    paths: {
        'esri-leaflet': '/components/esri-leaflet/index',
        'esri-leaflet-geocoder': '/components/esri-leaflet-geocoder/index',
        director: '/components/director/build/director',
        eventemitter2: '/components/eventemitter2/lib/eventemitter2',
        hbs: '/components/require-handlebars-plugin/hbs',
        jquery: '/components/jquery/dist/jquery',
        leaflet: '/components/leaflet/dist/leaflet-src',
        loglevel: '/components/loglevel/dist/loglevel',
        moment: '/components/moment/moment',
        underscore: '/components/underscore/underscore'
    },
    shim: {
        director: {
            exports: 'Router'
        },
        'esri-leaflet': {
            deps: ['leaflet']
        },
        'esri-leaflet-geocoder': {
            deps: ['esri-leaflet']
        }
    },
    hbs: {
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    },
    urlArgs: (new Date()).getTime()
});

require.config({
    baseUrl: '/scripts'
});
