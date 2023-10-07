import { createSlice } from '@reduxjs/toolkit';

import { addToBasket, fetchBasket, sendOrder } from './thunks';

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
  orders: [],
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
      state.products.status = 'loading';
    },
    [fetchBasket.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded';
    },
    [fetchBasket.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error';
    },
    [addToBasket.pending]: (state) => {
      state.status = 'loading';
      state.items = null;
    },
    [addToBasket.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.products.items.push(action.payload);
    },
    [addToBasket.rejected]: (state) => {
      state.status = 'error';
      state.items = null;
    },
    [sendOrder.pending]: (state) => {
      state.status = 'loading';
      state.items = null;
    },
    [sendOrder.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.orders.items.push(action.payload);
    },
    [sendOrder.rejected]: (state) => {
      state.status = 'error';
      state.items = null;
    },
  },
});

export const { addProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
