// script.js

// Grab references to DOM elements
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cartList = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Keep track of the total price
let totalPrice = 0;

/**
 * updateTotalPrice
 * Adjusts the total by `amount` and updates the display.
 * @param {number} amount — positive to add, negative to subtract
 */
function updateTotalPrice(amount) {
  totalPrice += amount;
  // Always show two decimal places
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

/**
 * removeItem
 * Handles click on a remove button: finds the price, deducts it, and removes the <li>.
 */
function removeItem(event) {
  // `closest('li')` finds the parent <li> of the clicked button
  const itemLi = event.target.closest('li');
  // Read the stored price
  const price = parseFloat(itemLi.dataset.price);
  // Subtract from total and update
  updateTotalPrice(-price);
  // Remove the item from the DOM
  itemLi.remove();
}

/**
 * addProductToCart
 * Creates a new <li> with the product name, price, and a Remove button.
 */
function addProductToCart() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Validate inputs
  if (!name) {
    alert('Please enter a product name.');
    return;
  }
  if (isNaN(price) || price <= 0) {
    alert('Please enter a valid price greater than 0.');
    return;
  }

  // Create the <li> element
  const li = document.createElement('li');
  li.className = 'cart-item';
  // Store the price in a data-attribute for easy retrieval on remove
  li.dataset.price = price;

  // Create a <span> to hold "Name — $Price"
  const textSpan = document.createElement('span');
  textSpan.textContent = `${name} — $${price.toFixed(2)}`;
  li.appendChild(textSpan);

  // Create the Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  // Attach click handler
  removeBtn.addEventListener('click', removeItem);
  li.appendChild(removeBtn);

  // Append the new item to the cart list
  cartList.appendChild(li);

  // Update total price
  updateTotalPrice(price);

  // Clear inputs for the next product
  productNameInput.value = '';
  productPriceInput.value = '';
}

// Attach our add-function to the "Add Product" button
addProductButton.addEventListener('click', addProductToCart);
