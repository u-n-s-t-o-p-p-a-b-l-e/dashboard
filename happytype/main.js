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
