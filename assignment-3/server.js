/* file: server.js

desc: server creates a varied response to user input in an html user interface

author: Ines Botto and Johnny DiGirolamo 

date: 23/11/16

*/ 


var chance = require("chance").Chance();

var express = require("express");
var app = express(); 

var server = require("http").Server(app);

var io = require("socket.io")(server); 


//patterns to potentially match user input to for the computer to respond to 

var pattern_1 = ["Sup dude", "What's good bro?", "hey", "hello", "greetings", "what's up", "howdy", "hi"]; 

var pattern_2 = ["Will you go out with me", "Want to get dinner with me", "will you marry me", "want to grab lunch" "will you go to prom with me"];

var pattern_3 = ["No you're crazy", "you're an idiot", "dumbass", "you're insane", "your the opposite of sane", "you fool", "you played yourself"];

var punctuation = [".", "...", "?", "!", "!?"];

//constants for computer response to utilize 

const greeting = ["Nothing dude", "Just chilling", "About to go nap", "Just hanging out", "How are you?", "How YOU doin'"]; 
const dfault = ["I don't understand", "Can you rephrase", "Sorry, come again", "No entiendo"]; 

//functions to add variation to computer generated responses

function choice(array){
	var index = chance.natural({"min:": 0, "max": array.length - 1}); 
	return array[index]; 
}

function maybe(array){
	if(chance.bool()){
		return choice(array);
	} else {
		return ""; 
	}
}

//functions to help match appropriate responses to user input 

function matches(msg, array_of_patterns){
	var msg_lower = msg.toLowerCase(); 

	for(var i = 0; i < array_of_patterns.length; i++){
		var pattern_lower = array_of_patterns[i].toLowerCase();

		if(msg_lower.search(pattern_lower) > -1){
			return true; 
		}
	} 
	return false; 
}

function pattern_1_answer(){
	return choice(["Hi", "Hello", "Good day"]) + choice(punctuation) + " " + choice(greeting) + " I'm " + maybe(["really", "terribly", "extremely", "very"]) + " " + choice(["great", "tired", "ecstatic", "terrific", "stressed"] + choice(punctuation));

}

function pattern_2_answer(){
	switch(choice[1, 2, 3]){
		case 1: //yes
			return choice(["Yes", "Of course", "Absolutely", "I thought you'd never ask"]) + choice(punctuation) + " This sounds " + maybe(["supremely", "amazingly", "really", "very"]) + " " + choice(["nice", "wonderful", "amazing", "lovely"]) + choice(punctuation);
			break;
		case 2: //no
			return choice(["No", "Never", "Absolutely not", "I'm flattered but no"]) + choice(punctuation) + " This sounds " + maybe(["supremely", "amazingly", "really", "very"]) + " " + choice(["awful", "terrible", "gag-inducing", "horrible"]) + choice(punctuation);
			break;
		case 3: //maybe 
			return choice(["Maybe", "We'll have to see", "Can I get back to you", "I'll let you know"]) + choice(punctuation);
			break;
	}
}

function pattern_3_answer(){
	switch(choice([1, 2])){
		case 1: // nice
			return choice(["I beg to differ", "That's quite rude", "I'm hurt", "Why must you speak to me this way", "My programmer says that I'm okay"]) + choice(punctuation);
			break;
		case 2: //angry
			return choice(["Fuck you", "Nah", "FOH", "Screw you","Bite me"]) + choice(punctuation);
			break;
	}
}

function default_answer(){
	return choice(dfault) + choice(punctuation); 
}

function answer(msg){
	if(matches(msg, pattern_1)){
		return pattern_1_answer();
	} else if(matches(msg, pattern_2)){
		return pattern_2_answer(); 
	} else if(matches(msg, pattern_3)){
		return pattern_3_answer();
	} else {
		return default_answer(); 
	}
}

// server and Socket Config

app.get('/', function (req, res){
	res.sendFile(__dirname + "/index.html");
});

//configure socket.io
io.on("connection", function(socket){
	console.log("got a connection");
	io.emit ("message from robot", msg);

	//(2) configure the connected socket to receive custom message
	socket.on("message from human", function(msg){
		console.log("got a human message: " + msg);

		var response = answer(msg);

		io.emit("message from robot", response);
	});

	/*function send_message(){
		socket.emit("message from human", msg);
	}*/

	socket.on("disconnect", function(){
		console.log("got a disconnection");
	});
});

//start the server


server.listen(8088, function(){
	console.log("listening on port: " + 8088);
});
