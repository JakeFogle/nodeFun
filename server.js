/// DEPENDENCIES

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3131;

app.listen(port, function() {
	console.log('I\m watching you...', port);
});

