'use strict';

var requireFrom = require('requirefrom');

var Application = requireFrom('server/src/')('application');

var application = new Application();
application.run();
