/**
 * New node file
 */
var path ="C:/Users/Public/Videos/Sample Videos/Wildlife.wmv";
var movpath = 'C:/Snaps/some downloads/Phas Gaye Re Obama - 2010  480P  1CD DVDSCR RIP  Xvid  Eng STUDIO  M2TV/Phas Gaye Re Obama.avi';
var fs = require('fs');

require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'video/mpeg'});
	var rs = fs.createReadStream(path);
	rs.pipe(res);
}).listen(4000);