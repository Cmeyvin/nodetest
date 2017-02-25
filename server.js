/* Author : Christnen Meyvin Cooppen */

//defining module dependencies

var express = require('express');
var connect = require('connect');
var server = express();
var port = process.env.PORT || 8080;

//configurations

server.use(express.static(__dirname + '/public')); //where __dirname is the directory of the current module
server.use(connect.logger('dev'));
server.use(connect.json());
server.use(connect.urlencoded());

// Add headers
server.use(function (req, res, next) {
	console.log(req.headers.origin);
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', 'application/json,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//defining routes location

require('./routes/routes.js')(server);

server.listen(port);

console.log('The App runs on port ' + port);