import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

/**
 * Adds an item to the basket.
 * @param {Object} params - The parameters to be sent with the request.
 * @returns {Promise} The promise containing the products in the order.
 */
export const addToBasket = createAsyncThunk('basket/addToBasket', async (params) => {
  const { data } = await axios.post('/add', params);
  return data.order.products;
});

/**
 * Fetches the contents of the basket.
 * @param {Object} params - The parameters to be sent with the request.
 * @returns {Promise} The promise containing the fetched basket data.
 */
export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (params) => {
  const { data } = await axios.get('/basket', params);
  return data;
});

/**
 * Sends an order request.
 * @returns {Promise} The promise containing the response data.
 */
export const sendOrder = createAsyncThunk('basket/sendOrder', async () => {
  const { data } = await axios.post('/order');
  return data;
});
