import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const addToBasket = createAsyncThunk('basket/addToBasket', async (params) => {
  const { data } = await axios.post('/add', params);
  return data.order.products;
});

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (params) => {
  const { data } = await axios.get('/basket', params);
  return data;
});

export const removeFromBasket = createAsyncThunk('basket/removeFromBasket', async (params) => {
  await axios.delete(`/remove/${params}`);
});

export const sendOrder = createAsyncThunk('basket/sendOrder', async () => {
  const { data } = await axios.post('/order');
  return data;
});
