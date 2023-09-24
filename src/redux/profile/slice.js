import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from './thunks';

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

// eslint-disable-next-line import/prefer-default-export
export const profileReducer = profileSlice.reducer;
