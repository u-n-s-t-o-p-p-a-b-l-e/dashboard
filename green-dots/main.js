document.addEventListener("DOMContentLoaded", function() {
		var originalElement = document.querySelector('.item');

		var parentContainer = document.querySelector('main');

		for (var i = 0; i < 365; i++) {
			var clonedElement = originalElement.cloneNode(true);

			parentContainer.appendChild(clonedElement);
		}
	});
