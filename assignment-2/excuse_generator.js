//excuses excuses

var program = require("commander"); 

var chance = require("chance").Chance(); 
var wrap = require("word-wrap"); 

const intro = ["Dear", "Greetings", "Hello", "Hi", "Good day"];
const name = ["Friend,", "Acquaintance,", "Family member,", "Neighbor,", "Nephew,", "Boss,", "Coworker,", "Sister,", "Brother,", "Bro,"];
const first = ["My apologies,", "I'm sorry but", "Regretfully,"]; 
const second = ["I'm unable to attend your", "I cannot go to your", "I'm not going to be able to make your", "there are a million other things I'd rather do than attend your"];
const third = ["party", "get-together", "event", "toddler's birthday party", "performance", "boardgame night", "family dinner", "bar mitzvah", "graduation"]; 
const noun = ["sister", "prior engagement", "dog", "car", "appointment", "illness"];
const adj_1 = ["my", "the", "a(n)", "your", "this"]; 
const adj_2 = ["silly", "shoddy", "important", "non-negotiable", "conflicting", "funny", "stumpy", "ill-timed", "unavoidable"];
const verb = ["ran", "drove", "has", "took", "lied", "suggested", "conflicted", "argued", "didn't allow", "forbid"];
const adv = ["likely", "unlikely", "tragically", "quite", "reasonably", "nicely"]; 
const end = ["Best,", "Yours,", "Regards,", "Sincerely,", "Truly,", "Best wishes,", "Peace,", "Your friend,", "Take care,", "Lots of love,"];

program
	.version('0.0.1')
	.option('-w , --width [value],', 'Width')
	.option('-s,--sentences [value]', 'Sentences')
	.parse(process.argv); 

var text = ""; 

function choice(array){
	var index = chance.natural({"min": 0, "max": array.length - 1}); 
	return array[index]; 
}

function maybe(array){
	if(chance.bool()){
		return choice(array);
	} else { 
		return ""; 
	}
}

function adv_pos(adv, pos){

	if(pos == adj_2){
		var grammar = maybe(pos);

		if(grammar != ""){
			return maybe(adv) + " " + grammar + " "; 
		} else {
			return grammar; 
		}

	} else if (pos == verb){
		return maybe(adv) + " " + choice(pos) + " ";
	}
}

function sentence(){
	return choice(adj_1) + " " + adv_pos(adv, adj_2) + choice(noun) + " " + adv_pos(adv, verb)
					    + choice(adj_1) + " " + choice(noun); 
	
} 

var text = choice(intro) + " " + choice(name) + "\n" + choice(first) + " "+ choice(second) + " " + choice(third) + ". "; 


for(var i = 0; i < program.sentences - 1; i++){
	text = text + sentence() + ". "; 
}


text = text + "\n" + choice(end) + "\n" + "I.A.B.";

console.log(wrap(text, {"width": program.width})); 