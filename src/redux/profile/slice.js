import { createSlice } from '@reduxjs/toolkit';

import { fetchOrders } from './thunks';
import { RequestStatus } from '../../constants';

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
      state.orders.status = RequestStatus.IN_PROGRESS;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.orders.items = action.payload;
      state.orders.status = RequestStatus.SUCCESSFUL;
    },
    [fetchOrders.rejected]: (state) => {
      state.orders.items = [];
      state.orders.status = RequestStatus.FAILED;
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export const profileReducer = profileSlice.reducer;
