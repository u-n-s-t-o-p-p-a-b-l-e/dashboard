const sourceText = document.getElementById('sourceText');
const lineDisplay = document.getElementById('lineDisplay');
const typingArea = document.getElementById('typingArea');
const wpmDisplay = document.getElementById('wpmDisplay');
const accuracyDisplay = document.getElementById('accuracyDisplay');
const fileInput = document.getElementById('fileInput');

let sourceContext = '';
let userInput = '';
currentLineIndex = 0;
let startTime;
let endTime;

function calculateWPM() {
	const typedWords = userInput.trim().split(/\s+/g).length;
	const typingDuration = (endTime - startTime) / 60000; 
	const wpm = Math.round(typedWords / typingDuration);
	return wpm;  
}

function calculateAccuracy() {
	const currentLine = sourceContent.split('\n')[currentLineIndex];
	const totalChars = currentLine.replace(/\s/g, '').length;
	const correctChars = userInput.split('').filter((char, i) = char === currentLine[i] && char !== ' ').length;
	const accuracy = Math.round((correctChars / totalChars) * 100);
	return accuracy;
}

function displayLine() {
	const lines = sourceContent.split('\n');
	const currentLine = lines[currentLineIndex];
	lineDisplay.textContent = currentLine;
	clearHighlighting();
}

function clearHighlighting() {
	lineDisplay.innerHTML = lineDisplay.textContent;
}

function highlightCharacters() {
	const lineDisplayText = lineDisplay.textContent;
	const userInputLength = userInput.length;
	let highlightedText = '';

	for (let i = 0; i < lineDisplayText.length; i++) {
		if (i < userInputLength) {
			if (lineDisplayText[i] === userInput[i] && lineDisplayText[i] !== ' ') {
				highlightedText += `<span class="highlight-correct">${lineDisplayText[i]}</span>`;
			} else if (lineDisplayText[i] !== ' ') {
				highlightedText += `<span class="highlight-incorrect">${lineDisplayText[i]</span>}`;
			} else {
				highlightedText += ' ';
			}
		} else if (i === userInputLength && userInput.trim() === lineDisplayText.trim()) {
			highlighted += `<span class="highlight-correct">${lineDisplayText.slice(i)}</span>`;
			break;
		} else {
			highlightedText += lineDisplaytext[i];
		}
	}

	linedisplay.innerHTML = highlightedText;
}
