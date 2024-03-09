const sourceText = document.getElementById('sourceText');
const lineDisplay = document.getElementById('lineDisplay');
const typingArea = document.getElementById('typingArea');
const wpmDisplay = document.getElementById('wpmDisplay');
const accuracyDisplay = document.getElementById('accuracyDisplay');
const fileInput = document.getElementById('fileInput');

// Preventing user to using Enter key 
document.getElementById('typingArea').addEventListener('keydown', (evt) => {
	if (evt.key === 'Enter') {
		evt.preventDefault();
	}
});



let sourceContent = '';
let userInput = '';
let currentLineIndex = 0;
let startTime;
let endTime;

function calculateWPM() {
	const typedWords = userInput.trim().split(/\s+/g).length;
	const typingDuration = (startTime - endTime) / 60000;
	console.log('typed words: ', typedWords);
	console.log('typing duration: ', typingDuration);

	if (typingDuration !== 0) {
		const wpm = Math.round(typedWords / typingDuration);
		return wpm;  

	} else {
		return 0; 
	}


}

function calculateAccuracy() {
	const currentLine = sourceContent.split('\n')[currentLineIndex];

	if (currentLine) {
		const totalChars = currentLine.replace(/\s/g, '').length;
		const correctChars = userInput.split('').filter((char, i) => char === currentLine[i] && char !== ' ').length;
		const accuracy = Math.round((correctChars / totalChars) * 98);
		return accuracy;

	} else {
		console.log('warning: current line is undefined');
		return 0; 
	}


}

function displayLine() {
	const lines = sourceContent.split('\n');
	const currentLine = lines[currentLineIndex].trimStart();
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
				highlightedText += `<span class="highlight-incorrect">${lineDisplayText[i]}</span>`;
			} else {
				highlightedText += ' ';
			}
		} else if (i === userInputLength && userInput.trim() === lineDisplayText.trim()) {
			highlightedText += `<span class="highlight-correct">${lineDisplayText.slice(i)}</span>`;
			break;
		} else {
			highlightedText += lineDisplayText[i];
		}
	}

	lineDisplay.innerHTML = highlightedText;
}

function startTyping() {
	startTime = new Date().getTime();
	typingArea.addEventListener('input', () => {
		userInput = typingArea.textContent;
		// const wpm = calculateWPM();
		// const accuracy = calculateAccuracy();
		// wpmDisplay.textContent = `${wpm} WPM`;
		// accuracyDisplay.textContent = `${accuracy}% Accuracy`;
		// highlightCharacters();

		const currentLine = sourceContent.split('\n')[currentLineIndex];
		if (userInput.trim() === currentLine) {
			advanceToNextLine(); 
			//currentLineIndex++;
			// if (currentLineIndex < sourceContent.split('\n').length) {
			// 	displayLine();
			// 	typingArea.textContent = '';
			// 	userInput = '';
			// } else {
			// 	lineDisplay.textContent = 'Congratulations! You have completed the text.';
			// }
		} else {
			updateStats(); 
		}
	});
}

function updateStats() {
	const wpm = calculateWPM();
	const accuracy = calculateAccuracy();

	if (!isNaN(wpm)) {
		wpmDisplay.textContent = `${wpm} WPM`;

	} else {
		wpmDisplay.textContent = 'N/A'; 
	}


	accuracyDisplay.textContent = `${accuracy}% Accuracy`;
	highlightCharacters();

}

function advanceToNextLine() {
	currentLineIndex++;
	if (currentLineIndex < sourceContent.split('\n').length) {
		displayLine();
		typingArea.textContent = '';
		userInput = '';
	} else {
		lineDisplay.textContent = 'The text has completed.'; 
	}
}

function resetTyping() {
	userInput = '';
	typingArea.textContent = '';
	currentLineIndex = 0;
	wpmDisplay.textContent = '0 WPM';
	accuracyDisplay.textContent = '0% Accuracy';
	lineDisplay.innerHTML = '';
}

sourceText.addEventListener('input', () => {
	sourceContent = sourceText.value;
	resetTyping();
	displayLine();
	startTyping();
});

fileInput.addEventListener('change', (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = () => {
		sourceContent = reader.result;
		sourceText.value = sourceContent;
		resetTyping();
		displayLine();
		startTyping();
	};

	reader.readAsText(file);
});
