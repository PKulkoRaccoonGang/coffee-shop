import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (params) => {
  const { data } = await axios.post('/basket', params);

  return data.order.products;
});
