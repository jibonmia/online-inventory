const productForm = document.getElementById('add-product-form');
const productList = document.getElementById('product-list');

let products = [];

productForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const productName = document.getElementById('product-name').value;
	const productQuantity = document.getElementById('product-quantity').valueAsNumber;

	addProduct(productName, productQuantity);

	productForm.reset();
});

function addProduct(name, quantity) {
	const product = {
		name,
		quantity
	};

	products.push(product);
	renderProduct(product);
}

function renderProduct(product) {
	const row = document.createElement('tr');

	row.innerHTML = `
		<td>${product.name}</td>
		<td>${product.quantity}</td>
	`;

	productList.appendChild(row);
}
