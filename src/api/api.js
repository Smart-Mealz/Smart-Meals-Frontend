// src/api/api.js
import axios from 'axios'

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://smart-meals-backend.onrender.com/api/v1/', // TODO: Update this
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor (for adding auth tokens later)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor (optional: handle 401 errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // You can force logout here if needed
      console.error('Unauthorized - maybe log out?')
    }
    return Promise.reject(error)
  }
)

export default api
