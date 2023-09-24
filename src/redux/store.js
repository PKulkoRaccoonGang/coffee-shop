import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from './slices/products';
import { authReducer } from './slices/auth';
import { basketReducer } from './slices/basket';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    basket: basketReducer,
  },
});

export default store;
