const products = [
	{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},
{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},

{

		name: 'Sony Playstation 5',
		url: 'https://i.ibb.co/zHmZnWx/playstation-5.png',
		category: 'games',
		price: 499.99,
	},
];

const checkboxes = document.getElementById('check');
const productsWrapper = document.getElementById('products-wrapper');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');

let cartItemCount = 0;

const productElements = [];

products.forEach((product) => {
	const productElement = createProductElement(product);
	productElements.push(productElement);
	productsWrapper.appendChild(productElement);
});

filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);
