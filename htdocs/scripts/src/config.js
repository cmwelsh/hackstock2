/* global requirejs: false */

requirejs.config({
    paths: {
        'esri-leaflet': '/components/esri-leaflet/index',
        director: '/components/director/build/director',
        hbs: '/components/require-handlebars-plugin/hbs',
        jquery: '/components/jquery/dist/jquery',
        leaflet: '/components/leaflet/index',
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
