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

function updateCart(e) {
	
	if (statusEl.classList.contains('added')) {
		statusEl.classList.remove('added');
		statusEl.innerText = 'Add To Cart';
		statusEl.classList.remove('bg-red-600');
		statusEl.classList.add('bg-gray-800');

		cartItemCount--;
	} else {
		statusEl.classList.add('added');
		statusEl.innerText = 'Remove From Cart';
		statusEl.classList.remove('bg-gray-800');
		statusEl.classList.add('bg-red-600');

		cartItemCount++;
	}

	cartCount.innerText = cartItemCount.toString();
}

function filterProducts() {
	const searchTerm = searchInput.value.trim().toLowerCase();

	const checkedCategories = Array.from(checkboxes).filter((check) => check.checked).map((check) => check.id);

	productElements.forEach((productElement, index) => {
		const product = products[index];

		const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
		const isInCheckedCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);

		if (matchesSearchTerm && isInCheckedCategory) {
			productElement.classList.remove('hidden');
		} else {
			productElement.classList.add('hidden');
		}
	});
}
