import React from 'react'
import chef from "../assets/images/chef.png"
import Footer from '../components/Footer'
import Header from '../components/Header'


const AboutUs = () => {
  return (
    <>
    <Header />
    <div className="bg-white text-gray-800">
        
      {/* Hero Section */}
      <section className="bg-green-300 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-900">
          We are on a mission to make home cooking simple, affordable, and delicious for everyone.
        </p>
      </section>

      {/* Company Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={chef}
          alt="Chef cooking"
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2015, our company was born out of a passion for healthy meals made from fresh ingredients — without the stress of meal planning and grocery shopping.
          </p>
          <p className="text-gray-700">
            Today, we deliver millions of meals every month to homes across Ghana and beyond, helping busy people eat better while discovering new recipes they love.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-green-500 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl text-orange-500 font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">We partner with trusted farms and suppliers to source the best seasonal produce and proteins.</p>
            </div>
            <div>
              <h3 className="text-xl text-orange-500  font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">Our packaging is recyclable, and we’re committed to reducing food waste through smart portions.</p>
            </div>
            <div>
              <h3 className="text-xl text-orange-500 font-bold mb-2">Customer First</h3>
              <p className="text-gray-600">Everything we do is focused on making your cooking experience better, easier, and more joyful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Ready to Cook with Us?</h2>
        <p className="text-gray-700 mb-6">Join thousands of happy home chefs. Choose your plan today.</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-400 transition">
          View Meal Plans
        </button>
      </section>
      <Footer/>
    </div>
    </>
  )
}

export default AboutUs