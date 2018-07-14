var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    cors = require("cors"),
    app = express(),
    port = process.env.PORT || 9000,
    root = __dirname;
    global.__base = __dirname + '/';


app.use(bodyParser.json({limit:'200mb', type:'application/x-www-form-urlencoding', extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());
app.use(express.static(root));
var router = require('./routes');
app.use('/', router);
//require('./routes')(app);
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);
exports = module.exports = app;