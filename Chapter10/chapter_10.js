/**
 * This file is to experiment the learnings from chapter 10 of professional nodejs book.
 */
require('net').createServer(function(socket){
	socket.on('data',function(data){
		console.log('got data:'+data);
	});
	
	socket.on('end',function(data){
		console.log('connection closed:'+data);
	});
	
	socket.write('some string');
}).listen(4001);
console.log('server started');