import React, { useState } from "react";
import formpic from "../assets/images/formpic.png";
import axios from "axios"; // Import axios to handle API requests
import Header from "../components/Header";

const ContactUs = () => {
  // State for form fields and response handling
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      // Submit the form data to the backend API
      const response = await axios.post(
        "https://smart-meals-backend.onrender.com/contact",
        {
          firstName,
          lastName,
          email,
          subject,
          message,
        }
      );

      if (response.status === 200) {
        setSuccess("Your message has been sent successfully!");
        // Clear the form after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      setError("There was an issue sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl text-orange-500 font-medium mb-4">Contact Us At SmartMeals</h2>
          <p className="text-gray text-lg text-gray-700 -600 mb-10">
            Eat Well. Live Better. One Kit at a Time
          </p>
        </div>

        {/* Form Section for contact*/}
        <div className="flex flex-col md:flex-row md:h-[700px] gap-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full md:w-3/5 p-4 md:p-6 bg-white rounded-lg shadow"
          >
            <div>
              <label className="block mb-2 font-medium">First Name *</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Last Name *</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject *</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your message *</label>
              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>

          {/* Image Section */}
          <div className="w-full md:w-2/5 h-full flex items-center justify-center">
            <img
              src={formpic}
              alt="Contact Form"
              className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
