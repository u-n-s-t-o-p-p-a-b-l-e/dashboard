console.clear();

var THECATEGORY,
	THEPROMPT,
	RECIPIENT,
	THECOLOR;

getPrompt();

function getPrompt(category) {
	$('body').removeClass(THECOLOR);
	$('button').removeClass('active');
}
