
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

// List of api endpoints
export const signup = (data) => api.post('/signup', data);
export const signin = (data) => api.post('/login', data);
// export const verifyOtp = (data) => api.post('/api/verify-otp', data);
// export const activate = (data) => api.post('/api/activate', data);
// export const roomCreate = (data) => api.post('/api/rooms', data);
// export const logout = () => api.post('/api/logout');
// export const getAllRooms = () => api.get('/api/rooms');
