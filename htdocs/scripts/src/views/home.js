define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');

    var log = require('lib/logger');
    var BaseView = require('lib/base/view');
    var template = require('hbs!templates/home');

    var HomeView = function() {
        BaseView.apply(this, arguments);
    };

    _.extend(HomeView.prototype, BaseView.prototype);

    HomeView.prototype.template = template;

    HomeView.prototype.initialize = function() {
        BaseView.prototype.initialize.apply(this, arguments);
    };

    HomeView.prototype.render = function() {
        BaseView.prototype.render.apply(this, arguments);

        this.$el.find('.js-type').on('click', this.typeSelected.bind(this));
    };

    HomeView.prototype.typeSelected = function(event) {
        var $button = $(event.currentTarget);
        var type = $button.data('type');
        log.info(type);
        this.emit('route', {path: '/' + type});
    };

    return HomeView;
});
