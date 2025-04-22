import React from "react";
import { MdOutlineFastfood } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-6 list-none bg-white  font-sans text-gray-950">
        <div className=" flex items-center space-x-2">
          <h2 className="font-extrabold text-xl font-serif ml-2 py-2 text-green-800">
            SmartMeals
          </h2>
          <MdOutlineFastfood />
        </div>

        <ul className="flex space-x-6 font-light ">
        <li>Home</li>
        <li> <a href="http://localhost:5173/about">About Us</a></li>
        <li><a href="http://localhost:5173/meals">Meal Kit</a></li>
        <li>Meal Plan</li>
        <li><a href="http://localhost:5173/contact">Contact</a></li>
        </ul>

        <div className="flex items-center space-x-3 mr-5">
          <span className="list-none"><a href="http://localhost:5173/login">Login In</a></span>
          <button className=" font-semibold  bg-orange-300 hover:bg-orange-400 p-2 w-25 h-9"><a href="http://localhost:5173/sign-up"> Sign Up</a></button>
        </div>
      </nav>
    </>
  );
};

export default Header;
