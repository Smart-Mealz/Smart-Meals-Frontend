import React, { createContext, useContext, useState } from 'react';

// Create a context to store the cart data
const CartContext = createContext();

// Provider component that will wrap the app
export const CartProvider = ({ children }) => {
  // Initialize the cart state from localStorage, or default to an empty array
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // Save the cart to localStorage whenever it changes
  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Add item to the cart
  const addToCart = (mealkit, quantity) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.mealkitId === mealkit.mealkitId
    );

    if (existingItemIndex !== -1) {
      // Update the quantity of the existing item
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      // Add the new item to the cart
      updatedCart.push({ ...mealkit, quantity });
    }

    updateCartInLocalStorage(updatedCart);
  };

  // Remove item from the cart
  const removeFromCart = (mealkitId) => {
    const updatedCart = cart.filter((item) => item.mealkitId !== mealkitId);
    updateCartInLocalStorage(updatedCart);
  };

  // Clear the cart
  const clearCart = () => {
    updateCartInLocalStorage([]); // Clear the cart from localStorage and state
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context in components
export const useCart = () => useContext(CartContext);
