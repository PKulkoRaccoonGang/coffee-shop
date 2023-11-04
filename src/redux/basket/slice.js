import { createSlice } from '@reduxjs/toolkit';

import { addToBasket, fetchBasket, sendOrder } from './thunks';
import { RequestStatus } from '../../constants';

const initialState = {
  products: {
    items: [],
    status: RequestStatus.IN_PROGRESS,
  },
  orders: [],
  status: RequestStatus.IN_PROGRESS,
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
      state.products.status = RequestStatus.IN_PROGRESS;
    },
    [fetchBasket.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = RequestStatus.SUCCESSFUL;
    },
    [fetchBasket.rejected]: (state) => {
      state.products.items = [];
      state.products.status = RequestStatus.FAILED;
    },
    [addToBasket.pending]: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
      state.items = null;
    },
    [addToBasket.fulfilled]: (state, action) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.products.items.push(action.payload);
    },
    [addToBasket.rejected]: (state) => {
      state.status = RequestStatus.FAILED;
      state.items = null;
    },
    [sendOrder.pending]: (state) => {
      state.status = RequestStatus.IN_PROGRESS;
      state.items = null;
    },
    [sendOrder.fulfilled]: (state, action) => {
      state.status = RequestStatus.SUCCESSFUL;
      state.orders.push(action.payload);
    },
    [sendOrder.rejected]: (state) => {
      state.status = RequestStatus.FAILED;
      state.items = null;
    },
  },
});

export const { addProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
