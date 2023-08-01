import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/sign-in', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loading';
      // eslint-disable-next-line no-param-reassign
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'loaded';
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.status = 'error';
      // eslint-disable-next-line no-param-reassign
      state.data = null;
    },
  },
});

export const selectorIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
