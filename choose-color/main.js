console.clear();

var catId = 1;

var THECATEGORY,
	THEPROMPT,
	RECIPIENT,
	THECOLOR;

getPrompt();

function getPrompt(category) {
	$('body').removeClass(THECOLOR);
	$('button').removeClass('active');

	switch(category) {
		case 'Writing':
			catId = '2';
			THECOLOR = category;
			$('.' + category).addClass('active');
			break;
		case 'Drawing':
			catId = '3';
			THECOLOR = category;
			$('.' + category).addClass('active');
			break;
		case 'Compliment':
			catId = '4';
			THECOLOR = category;
			$('.' + category).addClass('active');
			break;
		case 'Quote':
			catId = '5';
			THECOLOR = category;
			$('.' + category).addClass('active');
			break;
		default:
			catId = '1';
			THECOLOR = 'Random';
			$('.Random').addClass('active');
	}

	$('body').addClass(THECOLOR);
}
