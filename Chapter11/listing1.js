/**
 * New node file
 */
var http = require('http');
var util = require('util');

var server= http.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('hello world!');
	res.end();
});

server.on('error',function(err){
	console.log('Error:'+err);
});

//console.log(util.inspect(server));
console.log(util.inspect(server._events));
console.log(util.inspect(server._events.request));
server.listen(8000);
//console.log('Server is listening on 8000.');