const categories = [
	'New York',
    'Chicago',
	'Seattle',
    'San Francisco',
	'Paris',
    'London',
	'Tokyo',
    'Shanghai',
	'Madrid',
    'Berlin',
	'Sydney',
    'Manila',
	'Seoul',
    'Hong Kong',
    'Moscow'
];

let series = [
	[1, 4, 10, 4, 1, 1, 3, 1, 0, 1, 9, 4, 3, 1, 0, 3, 6,8],
	[1, 4, 1, 5, 1, 7, 1, 0, 0, 1, 3, 1, 4, 1, 3, 3, 2, 5],
	[1, 4, 2, 0, 4, 0,0, 1, 1, 0, 1, 0, 4, 1, 0, 4, 2, 3],
	[1, 3, 10, 5, 6, 2, 1, 4, 1, 5, 4, 3, 6, 2, 1, 0, 1, 2],
	[4, 0, 1, 0, 0, 1, 1, 1, 1, 4, 1, 2, 8, 4, 1, 4, 3, 5],
	[5, 4, 7, 4, 9, 0, 2, 3, 4, 10, 1, 0, 1, 0, 1, 5, 7, 4],
	[1, 2, 3, 6, 4, 3, 2, 2, 1, 4, 1, 0, 0, 0, 1, 2, 4, 7],
	[4, 3, 0, 7, 4, 1, 9, 1, 0, 1, 4, 1, 3, 3, 1, 3, 8, 12],
	[1, 3, 4, 0, 2, 11, 4, 5, 0, 1, 1, 3, 1, 11, 1, 1, 0, 2],
	[0, 3, 4, 1, 0, 1, 5, 1, 1, 11, 1, 5, 6, 5, 1, 1, 3, 5],
	[0, 1, 1, 4, 1, 4, 2, 0, 5, 1, 1, 1, 0, 1, 1, 2, 4, 5],
	[1, 1, 4, 1, 4, 7, 1, 1, 1, 0, 1, 4, 5, 1, 1, 1, 1, 6],
	[1, 1, 3, 1, 0, 1, 1, 1, 0, 0, 0, 10, 3, 4, 1, 2, 6],
	[1, 4, 4, 2, 4, 11, 3, 1, 1, 1, 1, 0, 1, 1, 1, 3, 6, 8]
];

const elements = [];
const container = document.getElementById('container');
series.forEach((values, index) => {
	const category = document.createElement('div');
	category.className = `category category-${index + 1}`;
	let nodes = `<label>${categories[index]}</label>`;
	values.forEach(value => {
		nodes += `<div class='node' value='${value}'></div>`;
	});
	category.innerHTML = nodes;
	container.appendChild(category);
});
