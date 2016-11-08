/*Ines Botto
Assignment 1 -- Bookstore Index

Program allows user to locate books from a bookstore's index 
basde on title, author, price, and kind.
*/

var program = require('commander');

var book_1 = {title: "The Sellout", author: "Paul Beatty", price: "19.99", kind: "Paperback"}; 

/*var b1_title = "The Sellout";
var b1_author = "Paul Beatty";
var b1_price = "19.99";
var b1_kind = "Paperback"; */

var book_2 = {title: "To Kill a Mockingbird", author: "Harper Lee", price: "9.50", kind: "Paperback"};


/*var b2_title = "To Kill a Mockingbird";
var b2_author = "Harper Lee";
var b2_price = "9.50";
var b2_kind = "Paperback"; */

var book_3 = {title: "A Game of Thrones", author: "George R.R. Martin", price: "9.99", kind: "Paperback"}; 

/*var b3_title = "A Game of Thrones";
var b3_author = "George R.R. Martin";
var b3_price = "9.99";
var b3_kind = "Paperback"; */

var book_4 = {title: "Extremely Loud and Incredibly Close", author: "Jonathan Safran Foer", price: "19.99", kind: "Paperback"};


/*var b4_title = "Extremely Loud and Incredibly Close";
var b4_author = "Jonathan Safran Foer";
var b4_price = "19.99";
var b4_kind = "Paperback"; */

var book_5 = {title: "Absolutely on Music: Conversations", author: "Haruki Murakami", price: "22.95", kind: "Hardcover"};

/*var b5_title = "Absolutely on Music: Conversations";
var b5_author = "Haruki Murakami";
var b5_price = "22.95";
var b5_kind = "Hardcover"; */ 

program
	.version('0.0.1')
	.option('-t, --title [value],', 'Title')
	.option('-a, --author [value]', 'Author')
	.option('-p, --price [value]', 'Price')
	.option('-k, --kind [value]', 'Kind')
	.parse(process.argv); 


switch(program) 
{
	case book_1.title, book_1.author, book_1.price, book_1.kind:
		console.log(book_1);
		break;
	case book_2.title, book_2.author, book_2.price, book_2.kind:
		console.log(book_2);
		break;
	case book_3.title, book_3.author, book_3.price, book_3.kind: 
		console.log(book_3);
		break;
	case book_4.title, book_4.author, book_4.price, book_4.kind:
		console.log(book_4);
		break;
	case book_5.title, book_5.author, book_5.price, book_5.kind:
		console.log(book_5);
		break;
	default:
		console.log("No match.");
		break; 

} 

