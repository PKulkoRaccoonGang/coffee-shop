import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

/**
 * Fetches a list of products.
 * @returns {Promise} The promise containing the fetched product data.
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});
