import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchOrders = createAsyncThunk('products/fetchOrders', async () => {
  const { data } = await axios.get('/orders');
  return data;
});
