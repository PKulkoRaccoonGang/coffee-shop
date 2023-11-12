import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

/**
 * Fetches product data.
 * @returns {Promise} The promise containing the fetched product data.
 */
export const fetchProduct = createAsyncThunk('product/fetchProduct', async (productId) => {
  const { data } = await axios.get(`/products/${productId}`);
  return data;
});
