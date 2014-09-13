define(function(require) {
    'use strict';

    var EventEmitter2 = require('eventemitter2');
    var $ = require('jquery');
    var _ = require('underscore');

    var BaseView = function(options) {
        EventEmitter2.call(this);
        this.attributes = options;
        this.$el = $(options.$el);
    };

    _.extend(BaseView.prototype, EventEmitter2.prototype);

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
