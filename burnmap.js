var fack = require('fack');
var _ = require('underscore');

var logger = fack.logger;

var express = fack.express;
var app = express();
app.locals._ = _;
app.get('/', function (req, res) {
    res.render('index');
});
app.start();
