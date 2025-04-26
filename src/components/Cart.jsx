import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const initialCart = [
  { id: 1, name: "Chicken Stir Fry", quantity: 2, price: 15.99 },
  { id: 2, name: "Vegetarian Pasta", quantity: 1, price: 12.99 },
  { id: 3, name: "Beef Tacos", quantity: 3, price: 14.49 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  // Update quantity of a product
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent reducing below 1
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-green-500 ml-4">
                      (${item.price.toFixed(2)})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-green-200 text-sm rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-12 text-center border rounded"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-green-200 text-sm rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-green-500 text-sm ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <span className="font-semibold text-lg">Total: </span>
              <span className="text-xl font-semibold">${getTotalPrice()}</span>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                <a href="http://localhost:5173/checkout">Proceed to Checkout</a>
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
