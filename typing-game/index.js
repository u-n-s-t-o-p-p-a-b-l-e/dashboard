window.addEventListener('load', init);

// Available levels
const levels = {
	easy: {time: 5, word: 'Easy'},
	medium: {time: 3, word: 'Medium'},
	hard: {time: 2, word: 'Hard'}
};

// To change levels
const currentLevel = levels.easy;



// Globals
let time = currentLevel.time;
let score = 0;
let isPlaying;

// 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const currentLevels = document.querySelector('#current-level');

const words = [
	'test',
	'programmer',
	'computer',
	'science',
	'marvelous',
	'excellent',
	'faster',
	'genius',
	'cheerful',
	'happy'
];

// Initialize Game
function init() {
	
	// Show number of seconds
	seconds.innerHTML = currentLevel.time;
	// Load word from array
	showWord(words);
	// Start matching on word input
	wordInput.addEventListener('input', startMatch);
	// Call countdown every second
	setInterval(countdown, 1000); 
	// Check game status
	setInterval(checkStatus, 50);
	// Display the initial difficulty level 
	displayDifficulty();
}


// Start match 
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel.time + 1;
		showWord(words);
		wordInput.value = '';
		score++;

	}

	// If score is -1, display 0
	if(score === -1) {
		scoreDisplay.innerHTML = 0;

	} else {

		scoreDisplay.innerHTML = score;
	}
}

function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct word!';
		return true;
	} else {
		message.innerHTML = '';
		return false;
	}

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
		score = -1;
	}
}

function displayDifficulty() {
	currentLevels.innerHTML = currentLevel.word;
}

