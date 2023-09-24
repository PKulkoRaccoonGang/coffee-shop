import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});
