'use strict';

var path = require('path');
var twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

var home = function(req, res) {
    res.sendFile(path.normalize(__dirname + '/../../htdocs/index.html'));
};

var messages = function(req, res) {
    twilioClient.sendMessage({
        to: process.env.CLOSEST_RESPONDER,
        from: process.env.TWILIO_CALLER_ID,
        body: req.body.address + '\nType:\n' + req.body.type + '\nDescription:\n' + req.body.description
    });
    res.send('{"status":200}');
};

module.exports = {
    home: home,
    messages: messages
};
