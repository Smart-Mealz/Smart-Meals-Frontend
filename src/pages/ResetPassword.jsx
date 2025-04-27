import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/api'
import { toast } from 'react-hot-toast'

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Extract the token from the URL query string
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search)
    return params.get('token')
  }

  useEffect(() => {
    const token = getQueryParams()
    if (!token) {
      setError('Invalid or expired token.')
    }
  }, [location])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    if (!newPassword || !confirmPassword) {
      setError('Please fill out both password fields.')
      setLoading(false)
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.')
      setLoading(false)
      return
    }

    const token = getQueryParams()

    if (!token) {
      setError('Token is missing or invalid.')
      setLoading(false)
      return
    }

    try {
      const response = await api.post(`/user/reset-password?token=${token}`, {
        newPassword,
        confirmPassword,
      })

      if (response.status === 200) {
        setSuccess(true)
        toast.success('Password has been successfully reset!')
        setTimeout(() => {
          navigate('/login')  // Redirect to login after success
        }, 1500)
      } else {
        setError('Something went wrong, please try again later.')
      }
    } catch (err) {
      console.error(err)
      setError('An error occurred while resetting the password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Your Password</h2>

        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}

        {success && (
          <div className="mb-4 text-green-600 text-center">
            Password reset successful! You will be redirected to the login page.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">New Password *</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-md p-2"
              placeholder="Enter your new password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Confirm New Password *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-md p-2"
              placeholder="Confirm your new password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in here.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
