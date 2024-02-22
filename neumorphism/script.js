document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.neumorphic');

	buttons.forEach(button => {
		button.addEventListener('click', function() {
			buttons.forEach(b => b.classList.remove('active'));
			this.classList.add('active');

		});
	});
});
