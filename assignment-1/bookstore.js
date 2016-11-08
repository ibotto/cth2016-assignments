/*Ines Botto
Assignment 1 -- Bookstore Index

Program allows user to locate books from a bookstore's index 
basde on title, author, price, and kind.
*/

var program = require('commander');

var book1 = {Title: "The Sellout", Author: "Paul Beatty", Price: "19.99", Kind: "Paperback"}; 

var book2 = {Title: "To Kill a Mockingbird", Author: "Harper Lee", Price: "9.50", Kind: "Paperback"}; 

var book3 = {Title: "A Game of Thrones", Author: "George R.R. Martin", Price: "9.99", Kind: "Paperback"}; 

var book4 = {Title: "Extremely Loud and Incredibly Close", Author: "Jonathan Safran Foer", Price: "19.99", Kind: "Paperback"}; 

var book5 = {Title: "Absolutely on Music: Conversations", Author: "Haruki Murakami", Price: "22.95", Kind: "Hardcover"}; 



program
	.version('0.0.1')
	.option('-t, --title [value],', 'Title')
	.option('-a,--author [value]', 'Author')
	.option('-p,--price [value]', 'Price')
	.option('-k,--kind [value]', 'Kind')
	.parse(process.argv); 


switch(program.title){
	case book1.Title:
		console.log("Title: " + book1.Title);
		console.log("Author: " + book1.Author);
		console.log("Price: " + book1.Price);
		console.log("Kind: " + book1.Kind);
		break;

	case book2.Title:
		console.log("Title: " + book2.Title);
		console.log("Author: " + book2.Author);
		console.log("Price: " + book2.Price);
		console.log("Kind: " + book2.Kind);
		break;

	case book3.Title:
		console.log("Title" + book3.Title);
		console.log("Author: " + book3.Author);
		console.log("Price: " + book3.Price);
		console.log("Kind: " + book3.Kind);
		break;

	case book4.Title:
		console.log("Title: " + book4.Title);
		console.log("Author: " + book4.Author);
		console.log("Price: " + book4.Price);
		console.log("Find: " + book4.Kind);
		break;

	case book5.Title:
		console.log("Title: " + book5.Title);
		console.log("Author: " + book5.Author);
		console.log("Price: " + book5.Price);
		console.log("Kind: " + book5.Kind);
		break;


	default:
		if(typeof program.title !== "undefined"){
			console.log("No match"); 
		}
		break; 
}

switch(program.author){
	case book1.Author:
		console.log("Title: " + book1.Title);
		console.log("Author: " + book1.Author);
		console.log("Price: " + book1.Price);
		console.log("Kind: " + book1.Kind);
		break;

	case book2.Author:
		console.log("Title: " + book2.Title);
		console.log("Author: " + book2.Author);
		console.log("Price: " + book2.Price);
		console.log("Kind: " + book2.Kind);
		break;

	case book3.Author:
		console.log("Title: " + book3.Title);
		console.log("Author: " + book3.Author);
		console.log("Price: " + book3.Price);
		console.log("Kind: " + book3.Kind);
		break;

	case book4.Author:
		console.log("Title: " + book4.Title);
		console.log("Author: " + book4.Author);
		console.log("Price: " + book4.Price);
		console.log("Kind: " + book4.Kind);
	case book5.Author: 
		console.log("Title: " + book5.Title);
		console.log("Author: " + book5.Author);
		console.log("Price: " + book5.Price);
		console.log("Kind: " + book5.Kind);
		break;
	default:
		if(typeof program.author !== "undefined"){
			console.log("No match.");
		}
		break;
	
}

switch(program.price){
	case book1.Price:
		console.log("Title: " + book1.Title);
		console.log("Author: " + book1.Author);
		console.log("Price: " + book1.Price);
		console.log("Kind: " + book1.Kind);
		break;

	case book2.Price:
		console.log("Title: " + book2.Title);
		console.log("Author: " + book2.Author);
		console.log("Price: " + book2.Price);
		console.log("Kind: " + book2.Kind);
		break;

	case book3.Price:
		console.log("Title: " + book3.Title);
		console.log("Author: " + book3.Author);
		console.log("Price: " + book3.Price);
		console.log("Kind: " + book3.Kind);
		break;

	case book4.Price:
		console.log("Title: " + book4.Title);
		console.log("Author: " + book4.Author);
		console.log("Price: " + book4.Price);
		console.log("Kind: " + book4.Kind);
		break;

	case book5.Price:
		console.log("Title: " + book5.Title);
		console.log("Author: " + book5.Author);
		console.log("Price: " + book5.Price);
		console.log("Kind: " + book5.Kind);
		break;

	default:
		if(typeof program.price !== "undefined"){
			console.log("No match"); 
		}
		break; 
}

switch(program.kind){
	case book1.Kind:
		console.log("Title: " + book1.Title);
		console.log("Author: " + book1.Author);
		console.log("Price: " + book1.Price);
		console.log("Kind: " + book1.Kind);
		break;

	case book2.Kind:
		console.log("Title: " + book2.Title);
		console.log("Author: " + book2.Author);
		console.log("Price: " + book2.Price);
		console.log("Kind: " + book2.Kind);
		break;

	case book3.Kind:
		console.log("Title: " + book3.Title);
		console.log("Author: " + book3.Author);
		console.log("Price: " + book3.Price);
		console.log("Kind: " + book3.Kind);
		break;

	case book4.Kind:
		console.log("Title: " + book4.Title);
		console.log("Authot: " + book4.Author);
		console.log("Price: " + book4.Price);
		console.log("Kind: " + book4.Kind);
		break;

	case book5.Kind:
		console.log("Title: " + book5.Title);
		console.log("Author: " + book5.Author);
		console.log("Price: " + book5.Price);
		console.log("Kind: " + book5.Kind);
		break;

	default:
		if(typeof program.kind !== "undefined"){
			console.log("No match"); 
		}
		break; 
}



