import React, { useState, useEffect } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); // Assuming clearCart is available in CartContext

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsLoggedIn(true);
      setUserName(userData.firstname);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Clear cart data
    clearCart(); // Call the clearCart function from CartContext

    setIsLoggedIn(false);
    setUserName("");
    navigate("/"); // Redirect to the homepage
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-white font-sans text-gray-950 shadow-md">
      {/* Logo Section as Link to Home */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <h2 className="font-extrabold text-xl font-serif ml-2 py-2 text-green-800">
            SmartMeals
          </h2>
          <MdOutlineFastfood className="text-3xl text-orange-500" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="space-x-6 font-light hidden md:flex">
        <li>
          <Link to="/" className="hover:text-orange-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
        </li>
        <li>
          <Link to="/meals" className="hover:text-orange-500">Meal Kit</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="flex items-center space-x-3">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="w-8 h-8 text-gray-700 hover:text-orange-500" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2 py-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      {/* Authentication Links or Greeter */}
      <div className="flex items-center space-x-3">
        {isLoggedIn ? (
          <>
            <span className="text-gray-700 font-semibold">
              Hello, {userName}!
            </span>
            <button
              onClick={handleLogout}
              className="font-semibold bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-orange-500">Login</Link>
              <Link to="/sign-up" className="text-white"><button className="font-semibold cursor-pointer bg-orange-300 hover:bg-orange-400 p-2 w-25 h-9">
                Sign Up
              </button></Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
