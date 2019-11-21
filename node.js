var http = require('http');
 var url = require('url');
var fs = require('fs');
http.createServer(function(req,res){
	var q = url.parse(req.url,true);
	var filename="." + q.pathname+".html";
if(filename=="./"){
	filename="./index";
	console.log(filename);
}
console.log(filename);
	fs.readFile(filename,function(err,data){
if (err) {
res.writeHead(400,{'Content-type': 'text/html'});
return res.end("400 Not Found");
}
	res.writeHead(200,{'Content-type':'text/html'});
	// var q = url.parse(req.url,true).query;
	// var dates = q.year + " " + q.month;
res.write(data);
	//res.write(dates);
	return res.end();
	});
}).listen(8080);
console.log("server running on port 8080");