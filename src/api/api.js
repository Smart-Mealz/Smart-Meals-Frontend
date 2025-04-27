// src/api/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://smart-meals-backend.onrender.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (attach auth tokens if available)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (handle 401 errors globally if needed)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized - maybe log out?');
    }
    return Promise.reject(error);
  }
);

// Fetch all meal kits (paginated)
export const fetchMealkits = async (page = 1) => {
  try {
    const response = await api.get(`/admin/mealkits?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching meal kits');
  }
};

// Fetch single mealkit by ID
export const fetchMealkitById = async (mealkitId) => {
  try {
    const response = await api.get(`/admin/mealkit/${mealkitId}`);
    return response.data.data; // assuming backend response { data: { mealkitData } }
  } catch (error) {
    throw new Error('Failed to fetch mealkit details');
  }
};

export default api;
