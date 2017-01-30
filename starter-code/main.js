console.log("JS file is connected to HTML! Woo!")
//setup cards in the game
var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

/*if (cardOne === cardTwo){
	alert('You Found A Match!');
} else {
	alert('Sorry, Try Again.');
}*/
function createCards() {
//get element id of game-baord and set to var
var board = document.getElementById('game-board');

//set function to create empty board
function createBoard() {
//create loop that creates html element for each card
for (var i = 0; i<cards.length; i++) {

//create the cards 
//give each elem a div and class of card
var newCardElement = document.createElement ('div');
	newCardElement.className = "card";

//append ea card to div with game-baord id
board.appendChild(newCardElement);
}
}
}

//execute createcards function
