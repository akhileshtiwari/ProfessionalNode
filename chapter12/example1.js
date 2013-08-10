/**
 * New node file
 */
var net = require('net');
var port = 4001;

var conn = net.createConnection(port);

conn.on('connect',function(){
	console.log('connected to the server');
});

conn.on('data',function(data){
	console.log("data:"+data);
	conn.write('quit');
});

conn.on('error',function(err){
	console.log(err);
});
