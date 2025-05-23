## Order Processing & Fulfillment Module
Welcome to the orderManager Node.js module. This node module helps you manage e-commerce orders. You can create new orders, add items, handle payments, update order statuses, and get a summary.

## Features
🛒 Create new orders for customers

➕ Add items to existing orders

💰 Process and validate payments

🔄 Update order statuses (e.g. “Shipped”, “Delivered”)

📊 Get a full summary of the order

## How to Use
1. Clone the repo or copy the files
Make sure you have two files:

orderManager.js (the Node module)

test.js (to test the module)

2. Initialize your project (if not done yet)
bash
Copy code
npm init -y
3. Run the test file
bash
Copy code
node test.js

## Example Usage (test.js)
js
```
const order = require('./orderManager');

const order1 = order.createOrder('Jane');
order.addItem(order1, 'Pokemon Booster Box', 50.9, 1);
order.addItem(order1, 'Card Sleeves', 2.0, 5);
order.payOrder(order1, 60.9);
order.updateStatus(order1, 'Shipped');
console.log('Order 1:');
console.log(order.getSummary(order1));
```

## Functions Available
| Function                                  | Description                                                 |
| ----------------------------------------- | ----------------------------------------------------------- |
| `createOrder(name)`                       | Creates a new order for the customer.                       |
| `addItem(orderId, name, price, quantity)` | Adds a product to an order.                                 |
| `payOrder(orderId, amount)`               | Handles payment and updates status to "Paid" if successful. |
| `updateStatus(orderId, status)`           | Changes the order status.                                   |
| `getSummary(orderId)`                     | Returns an overview of the order.                           |


## References
Module inspired by real-world e-commerce flows

Node.js documentation: https://nodejs.org/en/docs

Test app manually created based on the assignment requirement
