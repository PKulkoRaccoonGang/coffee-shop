import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444',
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
