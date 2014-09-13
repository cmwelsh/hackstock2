require([
    'jquery',
    'src/application'
], function(
    $,
    Application
) {
    'use strict';

    setTimeout(function() {
        $('#loading-bar').hide();
        var application = new Application();
        application.run();
    }, 2000);
});
