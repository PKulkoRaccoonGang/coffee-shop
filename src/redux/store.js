import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';
import { productsReducer } from './products/slice';
import { basketReducer } from './basket/slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    basket: basketReducer,
  },
});

export default store;
