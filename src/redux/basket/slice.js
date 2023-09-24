import { createSlice } from '@reduxjs/toolkit';

import { fetchBasket } from './thunks';

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

export const { addProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
