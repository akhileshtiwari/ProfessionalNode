/**
 * New node file
 */

process.stdin.resume();
var server = require('net').createServer(function(socket){
	console.log('new connection');
	
	socket.setEncoding('utf8');
	
	socket.write("Hello!! You can start typeing. type 'quit' to exit.\n");
	
	socket.on('data',function(data){
		console.log('got:'+data.toString());
		if (data.trim().toLowerCase()=='quit'){
			socket.write('Bye bye!');
			return socket.end();
		}
	});
	
	socket.on('end',function(){
		console.log('Client connection closed');
	});
	
	socket.on('error',function(err){
		console.log(err);
	});
	
	process.stdin.pipe(conn);
	
}).listen(4001);