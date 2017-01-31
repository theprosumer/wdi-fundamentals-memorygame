console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen"
//var cardTwo = "queen"
//var cardThree = "king"
//var cardFour = "king"

/*if (cardOne === cardTwo){
	alert('You Found A Match!');
} else {
	alert('Sorry, Try Again.');
}*/
//create a function called create cards and put code underneath
function createCards() {}
//get element id of game-board and set to a var
var gameboard = document.getElementById('game-board');

//create a for loop that creates an html element of ea card 
//each element should be div and have the class card
//then append the card to the board
for (var i=0; i<card.length; i++) {
	var eachCard =document.createElement('div'); 
    eachCard.className = 'card';
    gameboard.appendChild(eachCard);
}

//execute createCards Function
createCards('card')
