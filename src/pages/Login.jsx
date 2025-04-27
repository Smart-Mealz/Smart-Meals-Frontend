import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // import useLocation
import Header from '../components/Header';
import api from '../api/api';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get location state passed through the navigation
  const { redirectTo } = location.state || { redirectTo: '/meals' }; // Default redirect to '/meals'

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/users/login', formData);

      if (response.status === 200) {
        const { accessToken, user, message } = response.data;

        // Save token (optional: you could use sessionStorage instead if you want it temporary)
        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success(message || 'Login successful!');
        setTimeout(() => {
          navigate(redirectTo); // Redirect to the page they were trying to access
        }, 1500);
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Something went wrong.');
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gray-100 py-8">
          <div className="max-w-3xl mx-auto px-4">
            <nav className="text-sm text-gray-600 mb-2">
              <Link to="/" className="hover:underline">Home</Link> /{' '}
              <span className="text-gray-900">My account</span>
            </nav>
            <h1 className="text-4xl font-serif text-red-500">My Smartmeal account</h1>
          </div>
        </div>

        {/* Login Form */}
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="bg-white border border-gray-200 rounded-lg shadow p-8">
            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
                {error}
              </div>
            )}
            <h2 className="text-center text-xl font-semibold mb-6">Login</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
