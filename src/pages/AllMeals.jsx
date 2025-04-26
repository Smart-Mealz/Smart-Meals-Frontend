import React from "react";
import Header from "../components/Header";
import veggies from "../assets/images/veggies.png"
import Mealskit from "../components/Mealskit";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

const AllMeals = () => {
  return (
    <>
    <Header/>
    <section className="bg-white text-center py-10 px-4">
      {/* Promo Banner */}
      <div className="bg-green-500 text-white py-4 px-6 rounded-md max-w-3xl mx-auto mb-6">
        <p className="text-sm sm:text-base">
          Enjoy <span className="font-semibold">GHC 50 off</span> across the
          first 5 weeks as a student! — plus, the 1st week if you make a recommendation!
          <a href="#" className="underline ml-1">
            Terms
          </a>
          <span className="bg-orange-500 text-xs font-semibold px-2 py-1 rounded ml-2">
            Applied
          </span>
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
        Explore our meal delivery menu
      </h1>
      <p className="text-gray-700 mb-6">
        <span className="text-green-600 font-medium">
          Select our pre-prepped ingredients for your tasty meals
        </span>{" "}
        — the more you order, the more you save.
      </p>

      {/* Menu Options */}
      <div className="flex justify-center flex-wrap gap-6 text-orange-500 font-medium text-sm sm:text-base border-b border-gray-200 pb-2 mb-6">
        <button className="border-b-2 border-green-700 pb-1">
          Meal Kits
          <br />
          <span className="text-gray-500 text-sm font-normal">2 servings</span>
        </button>
        <button className="hover:text-green-700">
          Meal Kits
          <br />
          <span className="text-gray-500 text-sm font-normal">4 servings</span>
        </button>
        <button className="hover:text-green-700">
          Prepared & Ready
          <br />
          <span className="text-gray-500 text-sm font-normal">1 serving</span>
        </button>
        <button className="hover:text-green-700">
          Add-ons
          <br />
          <span className="text-gray-500 text-sm font-normal">
            Servings vary
          </span>
        </button>
      </div>

      {/* Meal Kit Section goes here */}
      <section className="text-left max-w-4xl mx-auto px-2">
        <h2 className="text-xl font-semibold text-gray-800">Meal Kits</h2>
        <p className="text-gray-600 mb-4">
          Easy-to-follow recipes perfectly portioned for two.
        </p>
        <p className="text-gray-800 font-medium mb-2">Week of April 21st</p>
      </section>

      <Mealskit />
    </section>
     <div className="bg-white border-t py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Social Media Icons */}
              <div>
                <p className="font-semibold mb-4">FOLLOW US</p>
                <div className="flex justify-center md:justify-start gap-4 text-gray-500 text-2xl">
                  <a href=""><FaInstagram /></a>
                                <a href=""><FaTiktok /></a>
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaPinterest /></a>
                                <a href=""><FaYoutube /></a>
                </div>
              </div>
    
              {/* Newsletter Signup */}
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
                  Sign up for offers, recipes, news, & more
                  <br />
                  (subscribers to the Blue Apron recipe newsletter agree to our
                  Privacy Policy)
                </p>
              </div>
    
              {/* Blog Preview */}
              <div>
                <p className="font-semibold mb-4">FROM THE BLOG</p>
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src={veggies}
                    alt="Blog"
                    className="w-32 h-20 object-cover mb-2"
                  />
                  <p className="text-sm text-gray-700 font-medium">
                    Blue Apron Celebrates the Heroes Among Us
                  </p>
                </div>
              </div>
            </div>
            <Footer/>
            </>
  );
};

export default AllMeals;
