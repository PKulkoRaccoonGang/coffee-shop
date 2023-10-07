import { createSlice } from '@reduxjs/toolkit';

import { fetchOrders } from './thunks';

const initialState = {
  orders: {
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
      state.orders.status = 'loading';
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.orders.items = action.payload;
      state.orders.status = 'loaded';
    },
    [fetchOrders.rejected]: (state) => {
      state.orders.items = [];
      state.orders.status = 'error';
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export const profileReducer = profileSlice.reducer;
