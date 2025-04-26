import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../api/api'
import { toast } from 'react-hot-toast'

const VerifyEmail = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Extract the token from the URL query string
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search)
    return params.get('token')
  }

  useEffect(() => {
    const token = getQueryParams()
    if (token) {
      verifyEmail(token)
    } else {
      setError('No verification token found in the URL.')
      setLoading(false)
    }
  }, [location])

  // Send the token to the backend API for verification
  const verifyEmail = async (token) => {
    try {
      const response = await api.get(`/users/verify-email?token=${token}`)

      if (response.status === 200) {
        toast.success('Email verified successfully! You can now log in.')
        setTimeout(() => {
          navigate('/login')  // Redirect to login after success
        }, 1500)
      } else {
        setError('Verification failed. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setError('An error occurred while verifying your email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Verify Your Email</h2>

        {loading && <p className="text-center text-blue-600">Verifying...</p>}

        {error && (
          <div className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="text-center">
            <p>Your email has been successfully verified!</p>
            <p>You will be redirected to the login page shortly.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VerifyEmail
