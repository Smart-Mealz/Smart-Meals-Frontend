import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import api from '../api/api'
import { toast } from 'react-hot-toast'
import Footer from '../components/Footer'

const SignUp = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await api.post('/users/register', formData)

      if (response.status === 201) {
        toast.success('Account created successfully!')
        setTimeout(() => {
          navigate('/login')
        }, 1500)
      } else {
        toast.error('Registration failed. Please try again.')
      }
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.')
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center pt-12">
        {/* Breadcrumb */}
        <div className="w-full text-center bg-orange-200 py-10">
          <p className="text-sm text-gray-500">
            Home / <span className="text-gray-900">Sign Up</span>
          </p>
          <h1 className="text-3xl text-orange-500 font-medium">My Account</h1>
        </div>

        {/* Form Card */}
        <div className="bg-white border rounded-md shadow-sm mt-10 w-full max-w-md p-8">
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
              {error}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input
                name="firstname"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
                placeholder="Enter First name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Last Name *</label>
              <input
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
                placeholder="Enter Last name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2"
                placeholder="eg.kofi847@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password *</label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 pr-10"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-9 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {/* Eye icon toggle */}
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.953 9.953 0 011.357-2.572M9.88 9.88a3 3 0 104.24 4.24M3 3l18 18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Confirm Password *</label>
              <input
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-2 pr-10"
                placeholder="Confirm password"
              />
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our{' '}
              <a href="#" className="underline">privacy policy</a>.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full border border-black py-2 text-black font-semibold disabled:opacity-50"
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SignUp
