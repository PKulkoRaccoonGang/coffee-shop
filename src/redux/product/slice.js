import { createSlice } from '@reduxjs/toolkit';

import { fetchProduct } from './thunks';
import { RequestStatus } from '../../constants';

const initialState = {
  product: {
    items: {},
    status: 'loading',
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.product.status = RequestStatus.IN_PROGRESS;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product.items = action.payload;
      state.product.status = RequestStatus.SUCCESSFUL;
    },
    [fetchProduct.rejected]: (state) => {
      state.product.items = {};
      state.product.status = RequestStatus.FAILED;
    },
  },
});

export const productReducer = productSlice.reducer;
