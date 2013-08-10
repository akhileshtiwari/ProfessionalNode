/**
 * New node file
 */
var util = require('util');
require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(req.url);
	res.end(util.inspect(req.headers));
}).listen(8000);

console.log('A new Server is listning on 8000');