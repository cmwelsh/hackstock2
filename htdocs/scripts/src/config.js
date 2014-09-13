/* global requirejs: false */

requirejs.config({
    paths: {
        jquery: '/components/jquery/dist/jquery',
        loglevel: '/components/loglevel/dist/loglevel',
        moment: '/components/moment/moment',
        underscore: '/components/underscore/underscore'
    },
    urlArgs: (new Date()).getTime()
});

require.config({
    baseUrl: '/scripts'
});
