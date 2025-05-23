let orders = [];              
let nextOrderId = 1;          

// Create a new order for a customer
function createOrder(customerName) {
    const order = {
        id: nextOrderId++,          // Assign a unique ID to the order
        customerName,               // Store customer’s name
        items: [],                  // Empty array to hold items in the order
        total: 0,                   // Total cost starts at 0
        status: 'Pending',          // Default status
        paid: false                 // Not paid yet
    };
    orders.push(order);             // Add the order to the orders list
    return order.id;                // Return the new order's ID
}

// Add an item to an existing order
function addItem(orderId, itemName, price, quantity) {
    const order = orders.find(o => o.id === orderId);   // Find the order
    if (!order) {
        console.log('Order #${orderId} not found.');    // Error if order doesn’t exist
        return;
    }

    const item = {
        name: itemName,                                  // Item name
        price,                                           // Price per item
        quantity,                                        // Quantity ordered
        subtotal: price * quantity                      // Total price for that item
    };

    order.items.push(item);                             // Add item to order
    order.total += item.subtotal;                       // Update order total
}

// Pay for an order
function payOrder(orderId, amount) {
    const order = orders.find(o => o.id === orderId);    // Find the order
    if (!order) {
        console.log('Order #${orderId} does not exist.'); // Error if not found
        return;
    }

    if (amount >= order.total) {
        order.paid = true;                               // Mark as paid
        order.status = 'Paid';                           // Update status
    } else {
        console.log('Please pay the right amount. You still owe $${(order.total - amount).toFixed(2)}.');
    }
}

// Update the status of an existing order
function updateStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);    // Find the order
    if (!order) {
        console.log('Can’t update. Order #${orderId} is missing.');  // Error if not found
        return;
    }

    order.status = newStatus;                            // Set the new status
}

// Get a summary of the order
function getSummary(orderId) {
    const order = orders.find(o => o.id === orderId);    // Find the order
    if (!order) return null;                             // Return nothing if not found
    return {
        id: order.id,
        customer: order.customerName,
        items: order.items,
        total: '$${order.total.toFixed(2)}',
        paid: order.paid ? 'Yes' : 'No',
        status: order.status
    };
}


module.exports = {
    createOrder,
    addItem,
    payOrder,
    updateStatus,
    getSummary
};
