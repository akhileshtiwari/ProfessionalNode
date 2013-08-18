/**
 * New node file
 */
var http = require('http');
var util = require('util');
var options ={
		host : 'www.google.com',
		port:80,
		path:'/index.html'
};

http.get(options, function(res){
	console.log(util.inspect(res));
	console.log('got response:' + res.statusCode);
});