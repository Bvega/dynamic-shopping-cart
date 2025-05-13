# Dynamic Shopping Cart

## Lab Overview
In this lab, I will build a dynamic shopping cart application to practice DOM manipulation with JavaScript. The app will allows users to:

- **Add** items with name and price.
- **View** added items, their individual prices, and quantities.
- **Update** quantities (optional enhancement).
- **Remove** items from the cart.
- **See** the total price update in real time.

This simulates a core feature of modern e-commerce sites and reinforces skills in creating and modifying elements, handling events, and updating content dynamically.

## Workplace Context
Imagine you’re on a web development team implementing the shopping cart feature for an online store. Your code will:

1. Collect product data from user input.
2. Dynamically render cart items in the DOM.
3. Handle user interactions (add/remove/update).
4. Keep the total price accurate and up to date.

## Objectives
By completing this lab, you will learn how to:

1. Create and append new DOM elements.
2. Use **data attributes** to store and retrieve item-specific data (e.g., price).
3. Update the DOM on-the-fly based on user interactions.
4. Write clear, modular JavaScript with event handlers.
5. Validate user input and handle edge cases gracefully.
6. Apply basic CSS (or a framework) for a clean, user-friendly UI.

## Project Structure

dynamic-shopping-cart/
├── index.html # HTML structure and links to CSS/JS
├── styles.css # Stylesheet for layout and design
└── script.js # JavaScript for dynamic behavior

Activity Tasks
Add Products: Try adding multiple items, confirm each appears correctly.

Remove Products: Remove items and verify the total updates properly.

Edge Cases: Test empty names or invalid prices—your code should alert and prevent invalid additions.

Optional Enhancement: Add quantity controls per item and update total based on quantity.