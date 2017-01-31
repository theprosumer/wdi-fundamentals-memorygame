console.log("JS file is connected to HTML! Woo!")

//create an array of cards
var cards = ['queen', 'queen', 'king', 'king'];

//decalare a var of cards in play as empty array
var cardsInPlay = [];

//get element id of game-board and set to a var
var board = document.getElementById('game-board');

//create a function called create cards and put code underneath
function createBoard() {

//create a for loop that creates an html element of ea card 
//each element should be div and have the class card
//then append the card to the board
for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div'); 
    cardElement.className = 'card';

//set the cards data card to the element of the array
cardElement.setAttribute('data-card', cards[i]);

//add an event lister in this case click
cardElement.addEventListener('click', isTwoCards);

//append card to game board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
}
}

//create function to check to see if two cards are in play
function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
//get and show images on cards
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
	 if (cardsInPlay.length === 2) {
	 	 isMatch(cardsInPlay);
	 	 cardsInPlay = [];
}
}
function isMatch(cards) {
  // alert for win or loss
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

