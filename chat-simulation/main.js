var $messages = $('.messages-content'),
	d, h, m,
	i = 0;

$(window).load(function() {
	$messages.mCustomScrollbar();
	setTimeout(function() {
		fakeMessage();
	}, 100);
});

function updateScrollbar() {
	$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	});
}

function setDate() {
	d = new Date()
	if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
	}
}

function insertMessage() {
	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	setDate();
	$('.message-input').val(null);
	updateScrollbar();
	setTimeout(function() {
		fakeMessage();
	}, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
	insertMessage();
});

$(window).on('keydown', function(e) {
	if (e.which == 13) {
		insertMessage();
		return false;
	}
})

var Fake = [
	'Aloha, I\'m Elliot and you?',
	'Nice to meet you',
	'How are you?',
    'Not too bad, thanks',
	'Coding today?',
	'What project you\'re workin on?',
	'Did you watch my movies?',
	'How does it goes?',
    'Well thats good to hear',
	'Ok gotta go now, gotta hack somethin tho',
	'See ya',
	':)'
]

function fakeMessage() {
	if ($('.message-input').val() != '') {
		return false;
	}
	$('<div class="message loading new"><figure class="avatar"><img src="/img/mrrobot.jpg" /></figure><span></span> </div>').appendTo($('.mCSB_container'));
	updateScrollbar();

	setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="/img/mrrobot.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	}, 1000 + (Math.random() * 20) * 100);
}
