var $infobox = $('.infobox');
var $infoboxCount = $infobox.find('.selected-count');
var $infoboxNames = $infobox.find('.selected-names');
var $categories = $('.categories');
var $scrollButtons = $('.categories-scroll');

$(document).on('click', 'category-link', function(e) {
	e.preventDefault();
	selectCategory($(this).closest('category'));
});

$(window).on('resize', adjustCategoriesContainer);

$scrollButtons.on('click', function() {
	if ($(this).hasClass('categories-scroll-left')) {
		scrollCategoriesContainer(-1);
	} else {
		scrollCategoriesContainer(1);
	}
});

adjustCategoriesContainer();
updateInfobox();

function selectCategory($category) {
	$category.toggleClass('category-selected');
	updateInfobox();
}

function updateInfobox() {
	var $selectedCategories = $('.category-selected');
	var selectedCount = $selectedCategories.length;
	var selectedCategories = [];
	$selectedCategories.each(function() {
		var name = $(this).find('.category-name').text();
		selectedCategories.push(name);
	});
	var totalCategories = $('.category').length;
	$infoboxCount.text(`${selectedCount} / ${totalCategories} selected`);
	$infoboxNames.html(selectedCategories.join(' / ') || '&nbsp;')
} 

function adjustCategoriesContainer() {
	var containerWidth = $categories.width();
	var contentWidth = $categories[0].scrollWidth;
	if (containerWidth < contentWidth) {
		$scrollButtons.removeClass('hidden');
	} else {
		$scrollButtons.addClass('hidden');
	}
}

function scrollCategoriesContainer(direction) {
	var offset = $('.category').first().width() * direction;
	var scrollLeft = $categories.scrollLeft() + offset;
	$categories.animat({ scrollLeft: scrollLeft }, 250);
}
