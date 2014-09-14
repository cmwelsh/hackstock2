define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');

    var BaseView = require('lib/base/view');
    var template = require('hbs!templates/description');

    var DescriptionView = function() {
        BaseView.apply(this, arguments);
    };

    _.extend(DescriptionView.prototype, BaseView.prototype);

    DescriptionView.prototype.template = template;

    DescriptionView.prototype.initialize = function() {
        BaseView.prototype.initialize.apply(this, arguments);

        this.$el.off().on('click', '.js-go-back', this.goBack.bind(this));
        this.$el.on('click', '.js-submit-description', this.submit.bind(this));
    };

    DescriptionView.prototype.render = function() {
        BaseView.prototype.render.apply(this, arguments);
    };

    DescriptionView.prototype.getTemplateData = function() {
        var typeMap = {
            police: 'Police',
            fire: 'Fire Department',
            ambulance: 'Ambulance Services',
            community: 'Community Outreach'
        };
        var formattedType = typeMap[this.attributes.type];
        var fullAddress = this.attributes.fullAddress;
        var addressParts = fullAddress.split(',');
        var address1 = addressParts.slice(0, addressParts.length - 2).join(',').trim();
        var address2 = addressParts.slice(addressParts.length - 1).join(',').trim();
        return {
            formattedType: formattedType,
            address1: address1,
            address2: address2
        };
    };

    DescriptionView.prototype.goBack = function() {
        this.emit('route', {
            path: '/'
        });
    };

    DescriptionView.prototype.submit = function(event) {
        var typeMap = {
            police: 'Police',
            fire: 'Fire Department',
            ambulance: 'Ambulance Services',
            community: 'Community Outreach'
        };
        var formattedType = typeMap[this.attributes.type];
        $.ajax({
          data: {
            type: formattedType,
            address: this.attributes.fullAddress,
            description: $('#description-form').val()
          },
          type: 'post',
          url: '/api/messages'
        }).then(function() {
            window.alert('You have successfully requested help for this location.');
        })
        .then(this.goBack.bind(this));
    };

    return DescriptionView;
});
