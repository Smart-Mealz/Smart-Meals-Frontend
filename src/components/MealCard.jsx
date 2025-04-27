import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // import navigate

const MealCard = ({ image, title, description, time, price, quantity, servings, mealkitId }) => {
  const { addToCart } = useCart();
  const [cartQuantity, setCartQuantity] = useState(1);
  const navigate = useNavigate(); // initialize navigate

  const handleAddToCart = () => {
    addToCart({ image, title, description, time, price, quantity, servings, mealkitId }, cartQuantity);
  };

  const handleCardClick = () => {
    navigate(`/meal/${mealkitId}`); // navigate to detail page
  };

  const increaseQuantity = () => {
    if (cartQuantity < quantity) {
      setCartQuantity(cartQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* CLICKABLE AREA */}
      <div className="relative cursor-pointer" onClick={handleCardClick}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        {/* TITLE IS ALSO CLICKABLE */}
        <h3
          className="text-blue-900 font-semibold text-sm mb-1 cursor-pointer hover:underline"
          onClick={handleCardClick}
        >
          {title}
        </h3>

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

        {/* Quantity controls */}
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

        {/* Add to Cart button */}
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-6 py-2 mt-4 rounded-full hover:bg-orange-400 transition"
          disabled={quantity === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealCard;
