import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import kit from "../assets/images/kit.png";
import veggies from "../assets/images/veggies.png";
import mealkit from "../assets/images/mealkit.png";
import mealkit3 from "../assets/images/mealkit3.png";
import mealkit4 from "../assets/images/mealkit4.png";
import green from "../assets/images/green.png";
import green3 from "../assets/images/green3.png";
import dishes2 from "../assets/images/dishes2.png";
import formpic from "../assets/images/formpic.png";
import { FaInstagram, FaStar, FaTiktok, FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const ingredients = [veggies, mealkit, mealkit3, mealkit4, formpic, green, green3, kit];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="bg-green-100 py-10 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <motion.h1 variants={fadeIn} className="text-3xl md:text-5xl font-semibold text-green-500 leading-tight">
            Easy Meal Kits.<br />
            Quality Ingredients.<br />
            Delivered To Your Door.
          </motion.h1>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition">
            <a href="/meals">SEE MEALKITS</a>
          </motion.button>
        </div>
        <motion.div variants={fadeIn} className="md:w-1/2 flex justify-center">
          <img src={dishes2} alt="Meal Kits" className="w-full max-w-xl md:max-w-2xl" />
        </motion.div>
      </motion.section>

      {/* Ratings Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="text-center bg-green-100 mt-10 py-6">
        <p className="text-gray-800 text-lg">
          Our Customers Think We're <span className="font-semibold text-green-700">EXCELLENT</span>
        </p>
        <div className="flex justify-center items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-5 h-5 text-green-500" />
          ))}
          <span className="text-blue-600 text-2xl font-bold ml-2">4.7</span>
          <span className="ml-2 text-sm text-gray-600">Based on <span className="font-semibold">40K</span> App Store Ratings</span>
        </div>
      </motion.div>

      {/* Choose From Section */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="text-center z-20 py-10 px-5">
        <h1 className="text-green-700 md:text-3xl tracking-wider font-bold mb-1">CHOOSE FROM</h1>
        <h1 className="text-green-600 text-3xl py-1">100+ INGREDIENTS</h1>
      </motion.div>

      {/* Ingredients Grid */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="bg-white py-10 px-4 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ingredients.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <img src={img} alt="Ingredient" className="w-full h-auto object-cover rounded" />
              <h2 className="text-orange-400 text-xl">Meal Kit</h2>
              <p>Pre-prepped ingredients</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <motion.button whileHover={{ scale: 1.05 }} className="border border-green-600 bg-green-50 hover:bg-green-300 rounded-full tracking-wide text-green-600 font-semibold py-2 px-6 transition">
            <a href="/meals">Explore our menu</a>
          </motion.button>
        </div>
      </motion.section>

      {/* Meal Kit Experience Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="bg-white pt-6 pb-6 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">120+ meal kits distributed</h2>
        <p className="text-gray-700 mb-6">Our Tasty Yet Affordable Meal Kits <br /> Are The Most Preferred Nationwide!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[mealkit4, mealkit3, mealkit].map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <img src={img} alt="Meal kit" />
              <h3 className="text-orange-500 font-semibold mt-4">2 decades of tasty meal experience</h3>
              <p className="text-sm text-gray-600 mb-10">We only deliver the freshest of produce <br /> for your meals</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing & Testimonial Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="bg-white text-center">
        <div className="py-12">
          <p className="text-lg font-medium text-gray-700">Get started for as little as <span className="font-bold">GHC 25 per meal kit</span></p>
          <motion.button whileHover={{ scale: 1.05 }} className="mt-6 px-8 py-3 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-500">
            SEE MEAL KITS
          </motion.button>
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4">
          <img className="w-full h-auto object-cover" src={green} alt="Celebration" />
          <motion.div variants={fadeIn} className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-95 max-w-xl text-center px-6 py-8 shadow-lg rounded-lg">
              <p className="text-xl text-orange-500 font-semibold mb-2">Celebrating 5 Years Of Excellent Service</p>
              <p className="text-xl font-bold text-green-500 mb-4 leading-relaxed">Our Greatest Delight is Putting a <br /> Smile On The Faces Of Our Customers</p>
              <hr className="border-orange-600 border-t-2 w-12 mx-auto my-3" />
              <p className="text-sm font-medium text-green-500 tracking-wide">CEO</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA + Footer Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="bg-white mt-20">
        <div className="relative w-full h-[400px]">
          <img className="w-full h-full object-cover" src={green3} alt="Fresh produce" />
          <motion.div variants={fadeIn} className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white shadow-lg p-8 rounded-md text-center max-w-md w-full">
              <h2 className="text-2xl font-bold text-green-500">Get Started Now</h2>
              <p className="text-gray-600 mt-2">for as little as <span className="text-green-600 font-semibold">GHC 25 per meal kit</span></p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full font-semibold">
                <a href="/meals">SEE MEAL KIT</a>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="bg-white border-t py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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

          <div>
            <p className="font-semibold mb-4">DISCOVER WHAT IS COOKING</p>
            <form className="flex flex-col md:flex-row items-center gap-2">
              <input type="email" placeholder="Enter your email" className="border px-4 py-2 w-full md:w-auto rounded" />
              <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">GO</button>
            </form>
            <p className="text-xs text-gray-500 mt-2">Sign up for offers, recipes, news, & more <br />(subscribers agree to our Privacy Policy)</p>
          </div>

          <div>
            <p className="font-semibold mb-4">FROM THE BLOG</p>
            <div className="flex flex-col items-center md:items-start">
              <img src={mealkit4} alt="Blog preview" className="w-32 h-20 object-cover mb-2" />
              <p className="text-sm text-gray-700 font-medium">Blue Apron Celebrates the Heroes Among Us</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Home;
