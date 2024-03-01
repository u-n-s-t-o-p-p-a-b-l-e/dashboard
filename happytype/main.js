const words = 'i am so happy with my life and this vibe will manifest happiness always forever and ever and nobody will take that away from me as this will be perpetual in my mind and in my heart';
const wordsCount = words.length;
const gameTime = 30 * 1000;
window.timer = null;
window.gameStart = null;
window.pauseTime = 0;


function addClass(el, name) {
	el.className += ' ' + name;
}

function removeClass(el, name) {
	el.className = el.className.replace(name,'');
}

function randomWord() {
	const randomIndex = Math.ceil(Math.random() * wordsCount);
	return words[randomIndex - 1];
}

function formatWord(word) {
	return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
	document.getElementById('words').innerHTML = '';
	for (let i = 0; i < 200; i++) {
		document.getElementById('words').innerHTML += formatWord(randomWord());
	}
	addClass(document.querySelector('.word'), 'current');
	addClass(document.querySelector('.letter'), 'current');
	document.getElementById('info').innerHTML = (gameTime / 1000) + '';
	window.timer = null;
}

function getWpm() {
	const words = [...document.querySelectorAll('.word')];
	const lastTypeWord = document.querySelector('.word.current');
	const lastTypedWordIndex = words.indexOf(lastTypeWord) + 1;
	const typedWords = words.slice(0, lastTypedWordIndex);
	const correctWords = typeWords.filter(word => {
		const letters = [...word.children];
		const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
		const correctLetters = letters.filter(letter => letter.className.includes('correct'));
		return incorrectLetters.length === 0 && correctLetters.length === letters.length;
	});
}

function gameOver() {
	clearInterval(window.timer);
	addClass(document.getElementById('game'), 'over');
	const result = getWpm();
	document.getElementById('info').innerHTML = `WPM: ${result}`;
}

document.getElementById('game').addEventListener('keyup', ev => {
	const key = ev.key;
	const currentWord = document.querySelector('.word.current');
	const expected = currentLetter?.innerHTML || ' ';
	const isLetter = key.length === 1 && key !== ' ';
	const isSpace = key === ' ';
	const isBackspace = key === 'Backspace';
	const isFirstLetter = currentLetter === currentWord.firstChild;

	if (document.querySelector('#game.over')) {
		return;
	}

	console.log({key,expected});
})
