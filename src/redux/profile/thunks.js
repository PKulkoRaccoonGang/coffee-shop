import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

/**
 * Fetches the list of orders associated with the user's profile.
 * @returns {Promise} The promise containing the fetched order data.
 */
export const fetchOrders = createAsyncThunk('profile/fetchOrders', async () => {
  const { data } = await axios.get('/orders');
  return data;
});
