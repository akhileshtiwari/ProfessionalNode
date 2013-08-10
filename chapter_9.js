/**
 * New node file
 */

var path = 'C:/eBooks/New Text Document.txt';
var fs = require('fs');

fs.open(path,'r',function(err,fd){
	var rs = fs.createReadStream(null,{fd:fd, encoding:'utf8'});
	rs.on('data', console.log);
	rs.on('end', function(){
		console.log('1st end received.');
	});
});

var rs = fs.createReadStream(path);
rs.setEncoding('utf8');
rs.on('data',function(data){
	console.log('2nd data received: ' + data);
});
rs.on('end',function(data){
	console.log('2nd end received.');
});

path = 'C:/Users/Public/Pictures/Sample Pictures/Desert.jpg';
require('http').createServer(function(req,res){
	var rs = fs.createReadStream(path);
	//res.writeHead(path);
	rs.pipe(res);
	console.log('req answered!');
}).listen(8080);
console.log('listening on 8080');