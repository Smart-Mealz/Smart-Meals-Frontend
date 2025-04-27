import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'
import Header from '../components/Header'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        if (!email) {
            setError('Please enter your email address.')
            setLoading(false)
            return
        }

        try {
            const response = await api.post('/user/forgot-password', { email })

            if (response.status === 200) {
                toast.success(response.data.message || 'A password reset link has been sent to your email.')
                setTimeout(() => {
                    navigate('/login') // Redirect to login after success
                }, 1500)
            } else {
                setError('Something went wrong, please try again later.')
            }
        } catch (err) {
            console.error(err)
            setError('An error occurred while requesting the password reset. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
                <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email address *</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border rounded-md p-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {error && <div className="text-red-600 text-center">{error}</div>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
                        >
                            {loading ? 'Sending...' : 'Request Reset Link'}
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
        </>

    )
}

export default ForgotPassword
