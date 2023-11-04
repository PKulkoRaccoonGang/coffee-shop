import axios from 'axios';

/**
 * Creates an Axios instance for making HTTP requests with specified parameters.
 *
 * @constant {Object} instance - The Axios instance.
 * @property {string} instance.baseURL - The base URL for all requests made by the created instance.
 */
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4444',
});

/**
 * Checks for each request the presence of an authorization token;
 * if there is a token, it is sent to the request for obtaining a user token.
 */
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
