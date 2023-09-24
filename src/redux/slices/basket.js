import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (params) => {
  const { data } = await axios.post('/basket', params);

  return data.order.products;
});

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.items.push(payload);
    },
  },
  extraReducers: {
    [fetchBasket.pending]: (state) => {
      state.status = 'loading';
      state.items = null;
    },
    [fetchBasket.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.products.items.push(action.payload);
    },
    [fetchBasket.rejected]: (state) => {
      state.status = 'error';
      state.items = null;
    },
  },
});

export const selectorIsOrder = (state) => Boolean(state.basket.products.items);
export const { addProduct } = basketSlice.actions;

export const selectorBasket = (state) => state.basket.products.items;

export const basketReducer = basketSlice.reducer;
