define(function(require) {
    'use strict';

    var $ = require('jquery');

    var BaseView = function(options) {
        this.attributes = options;
        this.$el = $(options.$el);
    };

    BaseView.prototype.initialize = function() {
    };

    BaseView.prototype.dispose = function() {
    };

    BaseView.prototype.getTemplateData = function() {
        return {};
    };

    BaseView.prototype.render = function() {
        this.$el.html(this.template(this.getTemplateData()));
    };

    return BaseView;
});
