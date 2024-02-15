window.addEventListener('load', init);
// Globals
let time = 5;
let score = 0;
let isPlaying;

// 
const wordInput = document.querySelector('#typing');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
	'test',
	'programmer',
	'computer',
	'science'
];

// Initialize Game
function init() {
	console.log('init');
	// Load word from array
	showWord(words);
	setInterval(countdown,1000); 
	// Check game status
	setIntercal(checkStatus, 50)
}

// Pick & show random words
function showWord(words) {
	// Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	// Output random word 
	currentWord.innerHTML = words[randIndex];
}

function countdown() {
	// Make sure time is not run 
	if(time > 0) {
		// Decrement
		time--;
	} else if(time === 0) {
		isPlaying = false;
		
	}
	timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
	if(!isPlaying && time === 0) {
	message.innerHTML = 'Game Over!';
	}
}
