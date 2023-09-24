import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});

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
      // eslint-disable-next-line no-param-reassign
      state.products.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.products.items = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.products.status = 'loaded';
    },
    [fetchProducts.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.products.items = [];
      // eslint-disable-next-line no-param-reassign
      state.products.status = 'error';
    },
  },
});

export const productsReducer = productsSlice.reducer;
