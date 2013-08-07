var http = require('http');

http.createServer(function (req, res) {
	console.log("Hello");
	res.writeHead(200, {'Content-Type': 'text/plain' });
	res.end('Hello, world1!');
}).listen(process.env.PORT || 1337);