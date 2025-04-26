import React, { useState } from "react";
import formpic from "../assets/images/formpic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading Section - Centered */}
        <div className="text-center mb-10">
          <h2 className="text-3xl text-orange-500 font-medium mb-4">
            Contact Us At SmartMeals
          </h2>
          <p className="text-gray text-lg text-gray-700 -600 mb-10">
            Eat Well. Live Better. One Kit at a Time
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section - Static at the top */}
          <div className="w-full md:w-2/5 h-full flex items-start justify-center">
            <img
              src={formpic}
              alt="Cosmetsy contact"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Form Section */}
          <form className="space-y-6 w-full md:w-3/5 p-4 md:p-6 bg-white rounded-lg shadow">
            <div>
              <label className="block mb-2 font-medium">First Name *</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Last Name *</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email *</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Password *</label>
              <input
                type="password"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Your message (optional)
              </label>
              <textarea
                rows="6"
                value={message}
                onChange={handleMessageChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black resize-none" // Added resize-none
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
