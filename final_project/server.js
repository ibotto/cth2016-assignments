//server.js

var express = require("express"); 
var app = express();

//import node.js

var server = require("http").Server(app);

//import socket.io

var io = require("socket.io")(server); 

//import pos

var pos = require("pos"); 

var access_token = null; 

function tag_text(text){
	var words = new pos.Lexer().lex(text);
	var tagger = new pos.Tagger(); 

	return tagger.tag(words);
} 

//---------------------------------------------------------------------------------------------

//configure socket.io

io.on("connection", function(socket){
	console.log("got a connection");

	socket.on("request tag text", function(msg){ 
		io.emit("tagged text", tag_text(msg)); 
	});

	socket.on("disconnect", function(){ 
		console.log("got a disconnection"); 
	});
});

//server and socket config 

app.get('/', function (req, res) {

	console.log("got GET");

  	res.sendFile(__dirname + '/interface.html');
});

//start server

server.listen(8088, function(){
	console.log("listening on port:" + 8088); 
});

