import React, { useState } from 'react';
import { useCart } from '../context/CartContext';  // Import the cart context

const MealCard = ({ image, title, description, time, price, quantity, servings, mealkitId }) => {
  const { addToCart } = useCart();  // Get the addToCart function from the context
  const [cartQuantity, setCartQuantity] = useState(1);

  // Function to handle the add to cart action
  const handleAddToCart = () => {
    addToCart({ image, title, description, time, price, quantity, servings, mealkitId }, cartQuantity);
  };

  // Function to increase the quantity
  const increaseQuantity = () => {
    if (cartQuantity < quantity) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-blue-900 font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>

        <div className="flex items-center text-xs text-blue-700 font-medium">
          <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          {time}
        </div>

        <div className="mt-4">
          <p className="text-lg text-gray-800 font-semibold">Price: ${price}</p>
          <p className="text-sm text-gray-600">Stock: {quantity} available</p>
          <p className="text-sm text-gray-600">Serves: {servings} people</p>
        </div>

        {/* Quantity selection and add to cart */}
        <div className="mt-4 flex items-center">
          <button
            className="bg-gray-300 p-2 rounded-l-lg"
            onClick={decreaseQuantity}
            disabled={cartQuantity === 1}
          >
            -
          </button>
          <input
            type="number"
            value={cartQuantity}
            readOnly
            className="w-12 text-center border-t border-b border-gray-300"
          />
          <button
            className="bg-gray-300 p-2 rounded-r-lg"
            onClick={increaseQuantity}
            disabled={cartQuantity >= quantity}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button with Disabled Logic for Out of Stock */}
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-orange-400 transition"
          disabled={quantity === 0} // Disable if out of stock
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealCard;
