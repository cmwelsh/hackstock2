/* global requirejs: false */

requirejs.config({
    paths: {
        'esri-leaflet': '/components/esri-leaflet/index',
        jquery: '/components/jquery/dist/jquery',
        leaflet: '/components/leaflet/index',
        loglevel: '/components/loglevel/dist/loglevel',
        moment: '/components/moment/moment',
        underscore: '/components/underscore/underscore'
    },
    urlArgs: (new Date()).getTime()
});

require.config({
    baseUrl: '/scripts'
});
