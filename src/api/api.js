import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://smart-meals-backend.onrender.com/api/v1',
  timeout: 10000, // 10 seconds timeout (can be made dynamic later)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to get the auth token
const getAuthToken = () => localStorage.getItem('token');

// Request interceptor (attach auth tokens if available)
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
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
      // Clear token and redirect user to login (if using React Router)
      localStorage.removeItem('token');
      // window.location.href = '/login'; // Uncomment if you use React Router for redirection
    }
    return Promise.reject(error);
  }
);

// Reusable function for handling API requests
const handleApiRequest = async (method, url, data = {}) => {
  try {
    const response = await api[method](url, data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Request failed';
    throw new Error(errorMessage);
  }
};

// Fetch all meal kits (paginated)
export const fetchMealkits = async (page = 1) => {
  return handleApiRequest('get', `/admin/mealkits?page=${page}`);
};

// Fetch single mealkit by ID
export const fetchMealkitById = async (mealkitId) => {
  return handleApiRequest('get', `/admin/mealkit/${mealkitId}`);
};

// Export API instance in case direct use is needed
export default api;
