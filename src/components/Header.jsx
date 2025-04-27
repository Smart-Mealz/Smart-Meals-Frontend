import React, { useState, useEffect } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login status
  const [userName, setUserName] = useState(""); // Store the logged-in user's name
  const navigate = useNavigate(); // To redirect user after logout

  // Simulating getting user data (replace with your actual authentication logic)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")); // Replace with your actual method
    if (userData) {
      setIsLoggedIn(true);
      setUserName(userData.firstName); // Replace with actual user name from response
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    // Clear user session (remove user data from localStorage or other storage)
    localStorage.removeItem("user");

    // Update the state to reflect the logout
    setIsLoggedIn(false);
    setUserName("");

    // Optionally, redirect user to home page or login page
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      <nav className="flex items-center justify-between p-6 bg-white font-sans text-gray-950 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <h2 className="font-extrabold text-xl font-serif ml-2 py-2 text-green-800">
            SmartMeals
          </h2>
          <MdOutlineFastfood className="text-3xl text-orange-500" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-light hidden md:flex">
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
            <Link to="/meal-plan" className="hover:text-orange-500">Meal Plan</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">Contact</Link>
          </li>
        </ul>

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
              <button className="font-semibold bg-orange-300 hover:bg-orange-400 p-2 w-25 h-9">
                <Link to="/sign-up" className="text-white">Sign Up</Link>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center justify-end">
        {/* Hamburger icon for mobile */}
        <button className="text-gray-700 hover:text-orange-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
