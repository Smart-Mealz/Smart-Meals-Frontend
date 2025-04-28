import React from 'react'
import { motion } from 'framer-motion';
import chef from "../assets/images/chef.png"
import Footer from '../components/Footer'
import Header from '../components/Header'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        
        {/* Hero Section */}
        <motion.section
          className="bg-green-300 py-16 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-orange-400 mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-900">
            We are on a mission to make home cooking simple, affordable, and delicious for everyone.
          </p>
        </motion.section>

        {/* Company Story */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={chef}
            alt="Chef cooking"
            className="w-full rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, our company was born out of a passion for healthy meals made from fresh ingredients — without the stress of meal planning and grocery shopping.
            </p>
            <p className="text-gray-700">
              Today, we deliver millions of meals every month to homes across Ghana and beyond, helping busy people eat better while discovering new recipes they love.
            </p>
          </motion.div>
        </section>

        {/* Mission & Values */}
        <motion.section
          className="bg-gray-100 py-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Fresh Ingredients", "Sustainability", "Customer First"].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <h3 className="text-xl text-orange-500 font-bold mb-2">{value}</h3>
                  <p className="text-gray-600">
                    {value === "Fresh Ingredients" && "We partner with trusted farms and suppliers to source the best seasonal produce and proteins."}
                    {value === "Sustainability" && "Our packaging is recyclable, and we’re committed to reducing food waste through smart portions."}
                    {value === "Customer First" && "Everything we do is focused on making your cooking experience better, easier, and more joyful."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="py-16 px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Ready to Cook with Us?</h2>
          <p className="text-gray-700 mb-6">Join thousands of happy home chefs. Choose your plan today.</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-400 transition">
            View Meal Plans
          </button>
        </motion.section>

        <Footer/>
      </div>
    </>
  )
}

export default AboutUs
