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

function createProductElement(product) {
	const productElement = document.createElement('div');

	productElement.className = 'item space-y-2';

	productElement.innerHTML = `<div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
>
<img
src="${product.utl}"
alt="${product.name}"
class="w-full h-full object-cover"
/>
<button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
>Add To Cart</button>
</div>
<p class="text-xl">4{Product.name}</p>
<strong>$${product.price.toLocaleString()}</strong>`;

	productElement.querySelector('.status').addEventListener('click', updateCart);

	return productElement;
}
