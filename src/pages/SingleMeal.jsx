import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealkitById } from "../api/api"; // 🛎️ import your function
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import Header from "../components/Header";
import { useCart } from "../context/CartContext"; // 🛎️ useCart for global cart

const SingleMeal = () => {
  const { mealkitId } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartQuantity, setCartQuantity] = useState(1); // 🛎️ Track cart quantity
  const [showRecipeSteps, setShowRecipeSteps] = useState(false); // 🛎️ State to toggle recipe steps visibility

  const { addToCart } = useCart(); // 🛎️ Add to cart function from context

  useEffect(() => {
    const loadMeal = async () => {
      try {
        const mealData = await fetchMealkitById(mealkitId); // 🔥 reuse api.js function
        setMeal(mealData);
      } catch (error) {
        console.error("Failed to fetch meal:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMeal();
  }, [mealkitId]);

  const handleAddToCart = () => {
    addToCart(meal, cartQuantity); // 🛎️ Add the meal to the global cart
  };

  const increaseQuantity = () => {
    if (cartQuantity < meal.quantity) { // 🛎️ Limit based on stock
      setCartQuantity(cartQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (cartQuantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  const toggleRecipeSteps = () => {
    setShowRecipeSteps(!showRecipeSteps); // Toggle visibility of recipe steps
  };

  if (loading) {
    return <div className="text-center py-20 text-lg font-semibold">Loading...</div>;
  }

  if (!meal) {
    return <div className="text-center py-20 text-lg font-semibold">Meal not found</div>;
  }

  return (
    <>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="relative">
          <img
            src={meal.image}
            alt={meal.title}
            className="rounded-md w-full"
          />
          <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {meal.tag}
          </span>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">
            {meal.title}
          </h2>
          <p className="text-gray-700 mb-4">{meal.description}</p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="flex items-center gap-1 text-green-500 font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              {meal.time}
            </span>
            <span className="text-orange-500 font-medium">
              +GHC {meal.price}/serving
            </span>
            <span>{meal.servings} Servings</span>
          </div>

          {/* Category and Stock Info */}
          <p className="text-gray-600 text-sm">Category: {meal.category}</p>
          <p className="text-gray-600 text-sm">In Stock: {meal.quantity}</p>

          {/* Ingredients (first 5 items) */}
          <h3 className="font-semibold text-gray-900 mb-1">From the Test Kitchen</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {meal.ingredients
              ? meal.ingredients.split(",").slice(0, 5).join(", ") + "..."
              : "Delicious meal prepared with love."}
          </p>

          {/* Recipe Steps Button */}
          <div className="mt-4">
            <button
              onClick={toggleRecipeSteps}
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600"
            >
              {showRecipeSteps ? "Hide Recipe Steps" : "Show Recipe Steps"}
            </button>
          </div>

          {/* Recipe Steps */}
          {showRecipeSteps && (
            <div className="mt-4 text-gray-700">
              <h4 className="font-semibold">Recipe Steps</h4>
              <ul className="list-decimal pl-6">
                {meal.recipeSteps.split(",").map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

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
              disabled={cartQuantity >= meal.quantity}
            >
              +
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600"
              disabled={meal.quantity === 0} // Disable if out of stock
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Social & Newsletter Footer Section */}
      <div className="bg-white border-t py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <p className="font-semibold mb-4">FOLLOW US</p>
          <div className="flex justify-center md:justify-start gap-4 text-gray-500 text-2xl">
            <FaInstagram />
            <FaTiktok />
            <FaFacebook />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>

        <div>
          <p className="font-semibold mb-4">DISCOVER WHAT’S COOKIN’</p>
          <form className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 w-full md:w-auto rounded"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              GO
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            Sign up for offers, recipes, news, & more <br />
            (subscribers agree to our Privacy Policy)
          </p>
        </div>

        <div>
          <p className="font-semibold mb-4">FROM THE BLOG</p>
          <div className="flex flex-col items-center md:items-start">
            <img
              src={meal.image}
              alt="Blog"
              className="w-32 h-20 object-cover mb-2"
            />
            <p className="text-sm text-gray-700 font-medium">
              Explore more delicious meals!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleMeal;
