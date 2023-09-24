import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchOrders = createAsyncThunk('products/fetchOrders', async () => {
  const { data } = await axios.get('/orders');
  return data;
});

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.products.status = 'loading';
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded';
    },
    [fetchOrders.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error';
    },
  },
});

export const getPurchaseHistory = (state) => state.profile.products.items[0]?.products;

export const profileReducer = profileSlice.reducer;
