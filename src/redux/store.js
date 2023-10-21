import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';
import { productsReducer } from './products/slice';
import { basketReducer } from './basket/slice';
import { profileReducer } from './profile/slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    basket: basketReducer,
    profile: profileReducer,
  },
});

export default store;
