import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from './thunks';
import { RequestStatus } from '../../constants';

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.status = RequestStatus.IN_PROGRESS;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = RequestStatus.SUCCESSFUL;
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = RequestStatus.FAILED;
    },
  },
});

export const productsReducer = productsSlice.reducer;
