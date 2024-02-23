const items = [
	{'name': 'React', 'percent': '49%'},
	{'name': 'Angular', 'percent': '17%'},
	{'name': 'Vue', 'percent': '10%'},
	{'name': 'Svelte', 'percent': '16%'},
	{'name': 'Solid', 'percent': '3%'},
	{'name': 'Others', 'percent': '3%'},
];

const leaderboardlist = document.getElementById('leaderboard-list');

items.forEach(item => {
	const li = document.createElement('li');
	const nameSpan = document.createElement('span');
	const percentSpan = document.createElement('span');

	nameSpan.textContent = item.name;
	nameSpan.classList.add('name');
	percentSpan.textContent = item.percent;
	percentSpan.slassList.add('percent');

	li.appendChild(nameSpan);
	li.appendChild(percentSpan);

	leaderboardlist.appendChild(li);
});
