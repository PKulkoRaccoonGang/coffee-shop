import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

/**
 * Fetches user data after successful authentication.
 * @param {Object} params - The parameters to be sent with the request.
 * @returns {Promise} The promise containing the fetched data.
 */
export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/sign-in', params);
  return data;
});

/**
 * Fetches user data for registration purposes.
 * @param {Object} params - The parameters to be sent with the request.
 * @returns {Promise} The promise containing the fetched data.
 */
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/sign-up', params);
  return data;
});

/**
 * Fetches the authenticated user's data.
 * @returns {Promise} The promise containing the fetched data.
 */
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});
