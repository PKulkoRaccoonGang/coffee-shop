import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchOrders = createAsyncThunk('profile/fetchOrders', async () => {
  const { data } = await axios.get('/orders');
  return data;
});
