import React from "react";
import { apiSignup } from "../services/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    try {
      const response = await apiSignup(data);
      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user.role));
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center pt-12">
        <div className="w-full text-center bg-green-200 py-10 ">
          <p className="text-sm text-gray-500">
            Home / <span className="text-gray-900">Sign Up</span>
          </p>
          <h1 className="text-3xl text-green-500 font-medium">My account</h1>
        </div>

        <div className="bg-white border rounded-md shadow-sm mt-10 w-full max-w-md p-8">
          {/* Form Section */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email address *
              </label>
              <input
                type="email"
                className="w-full border rounded-md p-2"
                placeholder="eg.kwaku56@gmail.com"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Password *
              </label>
              <input
                type="password"
                className="w-full border rounded-md p-2 pr-10"
                placeholder="Password"
              />
              <span className="absolute right-3 top-9 cursor-pointer">
                {/* Eye icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>

            {/* confirm password div */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                {" "}
                Confirm Password *
              </label>
              <input
                type="password"
                className="w-full border rounded-md p-2 pr-10"
                placeholder="Confirm Password"
              />
              <span className="absolute right-3 top-9 cursor-pointer">
                {/* Eye icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full border border-black py-2 text-black font-semibold"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
