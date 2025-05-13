# Tutorial: Building a Dynamic Shopping Cart

## Introduction
This step-by-step tutorial guides you through creating a dynamic shopping cart application from scratch. You’ll learn how to manipulate the DOM with JavaScript, handle user input, and update the interface in real time.

### Objectives
- Dynamically create and append HTML elements.
- Handle user events (click, input).
- Update and remove items in the cart.
- Perform input validation.
- Calculate and display a running total.

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript.
- A code editor (e.g., VS Code).
- A modern web browser (Chrome, Firefox, Edge).

## Step 1: Create Your Project Folder
1. Open your terminal or file explorer.
2. Create a new folder named `dynamic-shopping-cart`.
3. Inside the folder, create three files:
   - `index.html`
   - `styles.css`
   - `script.js`

Your folder structure should look like:
```
dynamic-shopping-cart/
├── index.html
├── styles.css
└── script.js
```

## Step 2: Build the HTML Structure
1. Open `index.html` in your editor.
2. Paste in the following code:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <link rel="stylesheet" href="styles.css"/>
     <title>Dynamic Shopping Cart</title>
   </head>
   <body>
     <!-- Page Title -->
     <h1>Dynamic Shopping Cart</h1>

     <!-- Product Input Section -->
     <div id="product-container">
       <input
         type="text"
         id="product-name"
         placeholder="Product Name"
       />
       <input
         type="number"
         id="product-price"
         placeholder="Product Price"
         min="0"
         step="0.01"
       />
       <button id="add-product">Add Product</button>
     </div>

     <!-- Cart Items List -->
     <ul id="cart"></ul>

     <!-- Total Price Display -->
     <h3>Total: $<span id="total-price">0.00</span></h3>

     <script src="script.js"></script>
   </body>
   </html>
   ```

3. **Explanation**:
   - The `<div id="product-container">` holds text and number inputs plus an “Add Product” button.
   - The `<ul id="cart">` will receive dynamically created `<li>` items.
   - The `<span id="total-price">` shows the running total.
   - We load `script.js` at the bottom so the DOM is ready when JS runs.

## Step 3: Add CSS Styling
1. Open `styles.css`.
2. Paste:

   ```css
   body {
     font-family: Arial, sans-serif;
     margin: 20px;
     line-height: 1.6;
   }

   /* Layout for inputs and button */
   #product-container {
     display: flex;
     gap: 10px;
     margin-bottom: 20px;
   }

   /* Remove bullets and padding */
   #cart {
     list-style: none;
     padding: 0;
   }

   /* Style each cart item */
   .cart-item {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 10px;
     border-bottom: 1px solid #eee;
     padding-bottom: 5px;
   }

   .cart-item span {
     flex: 1;
   }

   .cart-item button {
     margin-left: 10px;
     background: transparent;
     border: 1px solid #c00;
     color: #c00;
     padding: 4px 8px;
     cursor: pointer;
   }
   .cart-item button:hover {
     background: #c00;
     color: #fff;
   }
   ```

3. **Explanation**:
   - We use Flexbox to align inputs.
   - `.cart-item` uses Flexbox for item layout.
   - Buttons have a red outline, changing color on hover.

## Step 4: Implement JavaScript
1. Open `script.js`.
2. Paste:

   ```javascript
   // Get references to DOM elements
   const productNameInput = document.getElementById('product-name');
   const productPriceInput = document.getElementById('product-price');
   const addProductButton = document.getElementById('add-product');
   const cartList = document.getElementById('cart');
   const totalPriceSpan = document.getElementById('total-price');

   // Initialize running total
   let totalPrice = 0;

   /**
    * updateTotalPrice(amount)
    * Adjusts the total by `amount` and updates the display.
    */
   function updateTotalPrice(amount) {
     totalPrice += amount;
     totalPriceSpan.textContent = totalPrice.toFixed(2);
   }

   /**
    * removeItem(event)
    * Removes an item from the cart, updates total, and cleans up the DOM.
    */
   function removeItem(event) {
     const itemLi = event.target.closest('li');
     const price = parseFloat(itemLi.dataset.price);
     updateTotalPrice(-price);
     itemLi.remove();
   }

   /**
    * addProductToCart()
    * Validates inputs, creates a new cart item <li>, and appends it.
    */
   function addProductToCart() {
     const name = productNameInput.value.trim();
     const price = parseFloat(productPriceInput.value);

     // Input validation
     if (!name) {
       alert('Please enter a product name.');
       return;
     }
     if (isNaN(price) || price <= 0) {
       alert('Please enter a valid price greater than 0.');
       return;
     }

     // Build cart item
     const li = document.createElement('li');
     li.className = 'cart-item';
     li.dataset.price = price;

     const textSpan = document.createElement('span');
     textSpan.textContent = `${name} — $${price.toFixed(2)}`;
     li.appendChild(textSpan);

     const removeBtn = document.createElement('button');
     removeBtn.textContent = 'Remove';
     removeBtn.addEventListener('click', removeItem);
     li.appendChild(removeBtn);

     cartList.appendChild(li);
     updateTotalPrice(price);

     // Reset inputs
     productNameInput.value = '';
     productPriceInput.value = '';
   }

   // Wire up the Add button
   addProductButton.addEventListener('click', addProductToCart);
   ```

3. **Explanation**:
   - We select inputs, button, list, and total span.
   - Use `data-price` on `<li>` to store each item’s price.
   - `addProductToCart()` validates input, builds an `<li>`, and updates the total.
   - `removeItem()` finds the parent `<li>`, reads its price, subtracts it, and removes the element.

## Step 5: Test Your App
1. Open `index.html` in your browser.
2. Add a few products, confirm they show up with correct prices.
3. Click **Remove** to delete items and watch the total update.
4. Try invalid input (empty name or non-positive price) to see alerts.

## Step 6: Submit
1. Initialize Git and commit:
   ```bash
   git init
   git add .
   git commit -m "Complete dynamic shopping cart tutorial"
   ```
2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dynamic-shopping-cart.git
   git branch -M main
   git push -u origin main
   ```
3. Submit the repository link via Canvas.

---

Congratulations! You’ve built a fully functional dynamic shopping cart. Feel free to extend it (e.g., quantity updates, localStorage) once comfortable.
