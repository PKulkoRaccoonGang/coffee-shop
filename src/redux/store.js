import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from './slices/products';
import { authReducer } from './slices/auth';
import { basketReducer } from './slices/basket';
import { profileReducer } from './slices/profile';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    basket: basketReducer,
    profile: profileReducer,
  },
});

export default store;
