import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  // User registration
  signup: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  // User login
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const response = await api.put('/auth/profile', profileData);
    return response.data;
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await api.put('/auth/change-password', passwordData);
    return response.data;
  },
};

// Driver APIs
export const driverAPI = {
  // Driver registration
  registerDriver: async (driverData) => {
    const formData = new FormData();
    
    // Add basic fields
    Object.keys(driverData).forEach(key => {
      if (key !== 'rc' && key !== 'license' && key !== 'profilePhoto') {
        formData.append(key, driverData[key]);
      }
    });
    
    // Add files
    if (driverData.rc) formData.append('rc', driverData.rc);
    if (driverData.license) formData.append('license', driverData.license);
    if (driverData.profilePhoto) formData.append('profilePhoto', driverData.profilePhoto);
    
    const response = await api.post('/driver/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Driver login
  loginDriver: async (credentials) => {
    const response = await api.post('/driver/login', credentials);
    return response.data;
  },

  // Get driver profile
  getDriverProfile: async () => {
    const response = await api.get('/driver/profile');
    return response.data;
  },

  // Update driver profile
  updateDriverProfile: async (profileData) => {
    const response = await api.put('/driver/profile', profileData);
    return response.data;
  },

  // Toggle online status
  toggleOnlineStatus: async (isOnline) => {
    const response = await api.put('/driver/online-status', { isOnline });
    return response.data;
  },

  // Get driver earnings
  getDriverEarnings: async (period = 'all') => {
    const response = await api.get(`/driver/earnings?period=${period}`);
    return response.data;
  },

  // Get available rides
  getAvailableRides: async () => {
    const response = await api.get('/driver/available-rides');
    return response.data;
  },

  // Accept ride
  acceptRide: async (rideId) => {
    const response = await api.post(`/driver/rides/${rideId}/accept`);
    return response.data;
  },

  // Start ride
  startRide: async (rideId, otp) => {
    const response = await api.post(`/driver/rides/${rideId}/start`, { otp });
    return response.data;
  },

  // Complete ride
  completeRide: async (rideId) => {
    const response = await api.post(`/driver/rides/${rideId}/complete`);
    return response.data;
  },
};

// Ride APIs
export const rideAPI = {
  // Book a new ride
  bookRide: async (rideData) => {
    const response = await api.post('/rides/book', rideData);
    return response.data;
  },

  // Get all rides for a user
  getUserRides: async (userId) => {
    const response = await api.get(`/rides/user/${userId}`);
    return response.data;
  },

  // Get all rides (admin)
  getAllRides: async () => {
    const response = await api.get('/rides/all');
    return response.data;
  },

  // Update ride status
  updateRideStatus: async (rideId, status) => {
    const response = await api.put(`/rides/status/${rideId}`, { status });
    return response.data;
  },
};

// Health check
export const healthAPI = {
  checkHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};

// Auth utilities
export const authUtils = {
  // Save user data to localStorage
  saveUser: (userData) => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  },

  // Get current user from localStorage
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Get token from localStorage
  getToken: () => {
    return localStorage.getItem('token');
  },

  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
};

export default api; 