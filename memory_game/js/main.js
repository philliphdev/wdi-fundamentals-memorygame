var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var score = 0;
var cardsInPlay = [];
var cardsClicked = 0;
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score++;
		alert('You found a match! ' + "Current Score " + score);
	}
	else {
		alert('Sorry try again.');
	}
	cardsInPlay = [];
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsClicked < cards.length) {
		cardsClicked++;
	}
	else {
		alert('Game Over. Your score: ' + score);
		document.getElementById('.card').removeEventListener('click', flipCard);
	}
	if (cardsInPlay.length === 2) {
		checkForMatch();	
	}
};
var createBoard = function() {
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.className = "card";
//		console.log(cardElement);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
		
	}
};

var resetGame = function() {
	for(i=0; i < cards.length; i++) {
		var clearCard = document.querySelector('.card');
		console.log(clearCard);
		document.getElementById('game-board').removeChild(clearCard);
	}
	createBoard();
	cardsInPlay = [];
	score = 0;
	cardsClicked = 0;
};

createBoard();

document.getElementById('resetButton').addEventListener('click', resetGame);
