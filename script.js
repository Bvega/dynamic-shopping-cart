// script.js

// Grab DOM elements
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cartList = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

// Function to recalculate total by summing (unitPrice * quantity) for each item
function recalcTotal() {
  let sum = 0;
  // Loop through all cart items
  cartList.querySelectorAll('.cart-item').forEach(itemLi => {
    const unitPrice = parseFloat(itemLi.dataset.price);
    const qty = parseInt(itemLi.querySelector('.qty-input').value);
    sum += unitPrice * qty;
  });
  // Update display
  totalPriceSpan.textContent = sum.toFixed(2);
}

/**
 * removeItem(event)
 * Removes the <li> and updates the total.
 */
function removeItem(event) {
  const itemLi = event.target.closest('li');
  itemLi.remove();
  recalcTotal();
}

/**
 * addProductToCart()
 * Validates inputs, builds a cart item with name, unit price, quantity, and remove button.
 */
function addProductToCart() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Validation
  if (!name) {
    alert('Please enter a product name.');
    return;
  }
  if (isNaN(price) || price <= 0) {
    alert('Please enter a valid price greater than 0.');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'cart-item';
  li.dataset.price = price; // store unit price

  // Product name & unit price text
  const textSpan = document.createElement('span');
  textSpan.textContent = `${name} — $${price.toFixed(2)}`;
  li.appendChild(textSpan);

  // Quantity input
  const qtyInput = document.createElement('input');
  qtyInput.type = 'number';
  qtyInput.min = '1';
  qtyInput.value = '1';
  qtyInput.className = 'qty-input';
  // On change, recalculate total
  qtyInput.addEventListener('change', () => {
    if (qtyInput.value < 1) qtyInput.value = 1; // enforce minimum
    recalcTotal();
  });
  li.appendChild(qtyInput);

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', removeItem);
  li.appendChild(removeBtn);

  // Add to cart and recalc total
  cartList.appendChild(li);
  recalcTotal();

  // Clear inputs
  productNameInput.value = '';
  productPriceInput.value = '';
}

// Wire up Add Product button
addProductButton.addEventListener('click', addProductToCart);
