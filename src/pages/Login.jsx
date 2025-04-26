import React from 'react'
import { Link } from 'react-router'
import Header from '../components/Header'

const Login = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero / Breadcrumb */}
        <div className="bg-gray-100 py-8">
          <div className="max-w-3xl mx-auto px-4">
            <nav className="text-sm text-gray-600 mb-2">
              <Link to="/" className="hover:underline">Home</Link> /{' '}
              <span className="text-gray-900">My account</span>
            </nav>
            <h1 className="text-4xl font-serif text-red-500">My Smartmeal account</h1>
          </div>
        </div>

        {/* Login Card */}
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="bg-white border border-gray-200 rounded-lg shadow p-8">
            <h2 className="text-center text-xl font-semibold mb-6">Login</h2>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login