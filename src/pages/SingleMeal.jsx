import React from "react";
import Header from "../components/Header";
import chicken from "../assets/images/chicken.png";
import Footer from "../components/Footer";
import mealkit4 from "../assets/images/mealkit4.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const SingleMeal = () => {
  return (
    <>
    <Header/>
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="relative">
          <img
            src={chicken}
            alt="Miso-Glazed Pork Chicken Bao Buns"
            className="rounded-md w-full"
          />
          <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            CRAFT
          </span>
        </div>

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">
            Miso-Glazed Full Chicken
          </h2>
          <p className="text-gray-700 mb-4">
            with Spicy Mayo, Peanuts & Cucumber-Cabbage Slaw
          </p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="flex items-center gap-1 text-green-500 font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              40 MIN
            </span>
            <span className="text-orange-500 font-medium">+GHC 24.99/serving</span>
            <span>2 Servings</span>
          </div>

          <h3 className="font-semibold text-gray-900 mb-1">
            From the Test Kitchen
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our beloved full chicken is back! This soft, pillowy steamed chicken
            is the perfect vehicle for our fillings of savory glazed rice,
            crunchy veggie slaw, spicy mayo, and peanuts tossed with lime,
            sesame seeds, and scallions.
          </p>

          <a href="#" className="text-orange-500 font-semibold hover:underline">
            YOUR HEALTH, OUR PRIORITY!
          </a>

          <div className="mt-6">
            <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600">
              SEE RECIPE
            </button>
          </div>

           {/* Nutritional Info */}
          
           <div className="p-6 mt-8 bg-white rounded-md shadow-md max-w-md">
      <h2 className="text-lg font-semibold mb-2">Nutrition</h2>
      <div className="flex justify-between border-b pb-2 mb-4 text-sm text-gray-600">
        <span>Per Serving</span>
      </div>
      <div className="flex justify-between items-center text-gray-800 text-lg font-medium">
        <span>Calories</span>
        <span>1310 Cals</span>
      </div>
      <button className="mt-4 px-4 py-2 border border-green-700 text-green-500 rounded-full text-sm font-semibold hover:bg-blue-50 transition"><a href="">VIEW FULL NUTRITION</a>
        
      </button>
    </div>















        </div>
      </section>
      <div className="bg-white border-t py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Social Media Icons */}
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
              src={mealkit4}
              alt="Blog"
              className="w-32 h-20 object-cover mb-2"
            />
            <p className="text-sm text-gray-700 font-medium">
              Blue Apron Celebrates the Heroes Among Us
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleMeal;
